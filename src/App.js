import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import NotFound from './Components/Pages/Error/NotFound';
import Footer from './Components/Pages/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Menubar from './Components/Pages/Menubar/Menubar';
import Products from './Components/Pages/Products/Products';
import Purchase from './Components/Pages/Purchase/Purchase';
import Register from './Components/Pages/Register/Register';
import ManageOrders from './Components/Pages/Dashboard/Admin/ManageOrders/ManageOrders';
import ManageProducts from './Components/Pages/Dashboard/Admin/ManageProducts/ManageProducts';
import AddProduct from './Components/Pages/Dashboard/Admin/AddProduct/AddProduct';
import MakeAdmin from './Components/Pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import MyOrders from './Components/Pages/Dashboard/User/MyOrders/MyOrders';
import Pay from './Components/Pages/Dashboard/User/Pay/Pay';
import AddReview from './Components/Pages/Dashboard/User/AddReviwe/AddReview';
import Update from './Components/Pages/Products/Update';


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
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders />
            </PrivateRoute>
            <PrivateRoute path="/manageproducts">
              <ManageProducts />
            </PrivateRoute>
            <PrivateRoute path="/addproduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/update/:productId">
              <Update />
            </PrivateRoute>
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