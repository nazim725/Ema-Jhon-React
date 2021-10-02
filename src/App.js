
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Shop from './Components/Shops/Shop';
import Inventory from './Components/Inventory/Inventory';
import OrderRivew from './Components/OrderRivew/OrderRivew';
import NotFound from './Components/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
    

      <Router>
      <Header></Header>
      <Switch>
          <Route  path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/rivew">
           <OrderRivew></OrderRivew>
          </Route>
          <Route path="/inventory">
          <Inventory></Inventory>
          </Route>
          <Route path='/placeOrder'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
