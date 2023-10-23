import '../src/dist/styles.css';
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from './components/Navbar';
import { ApolloProvider, ApolloClient, InMemoryCache } from'@apollo/client';

function App() {
  return (
    <>
    <Routes>
      <div className='App'>
        <Navbar />
        <div>
         <Switch>
           <Route path = '/'>
            <Home />
           </Route>
         </Switch>
        </div>
      </div>
    </Routes>
    </>
  );
}

export default App;
