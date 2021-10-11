
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Shop from './Components/Shops/Shop';
import Inventory from './Components/Inventory/Inventory';
import OrderRivew from './Components/OrderRivew/OrderRivew';
import NotFound from './Components/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/authProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div>

      <AuthProvider>
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
          <PrivateRoute path="/inventory">
          <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/shipping">
          <Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path='/placeOrder'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    

     
  
    </div>
  );
}

export default App;
