import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import AddReview from './Components/Pages/AddReviwe/AddReview';
import AddProduct from './Components/Pages/Dashboard/AddProduct/AddProduct';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './Components/Pages/Dashboard/ManageProducts/ManageProducts';
import ManageOrders from './Components/Pages/Dashboard/ManageOrders/ManageOrders';
import NotFound from './Components/Pages/Error/NotFound';
import Footer from './Components/Pages/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Menubar from './Components/Pages/Menubar/Menubar';
import MyOrders from './Components/Pages/MyOrders/MyOrders';
import Products from './Components/Pages/Products/Products';
import Purchase from './Components/Pages/Purchase/Purchase';
import Register from './Components/Pages/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Pay from './Components/Pages/Pay/Pay';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/manageorders">
              <ManageOrders />
            </Route>
            <Route path="/manageproducts">
              <ManageProducts />
            </Route>
            <Route path="/addproduct">
              <AddProduct />
            </Route>
            <Route path="/makeadmin">
              <MakeAdmin />
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay />
            </PrivateRoute>
            <PrivateRoute path="/addreview">
              <AddReview />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/purchase">
              <Purchase />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;