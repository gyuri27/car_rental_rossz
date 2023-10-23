const {cars} = require('../sampleData.js');

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} = require('graphql');

const CarType = new GraphQLObjectType({
    name: 'Car',
    fields: () => ({
        id: {type: GraphQLID},
        make: {type: GraphQLString},
        model: {type: GraphQLString},
        year: {type: GraphQLString},
        color: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        cars: {
            type: new GraphQLList(CarType),
            resolve(parent,qrgs) {
                return cars;
            }
        },
        car: {
            type: CarType,
            args: { id: {type: GraphQLID} },
            resolve(parent, args) {
                return cars.find(car => car.id === args.id);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})