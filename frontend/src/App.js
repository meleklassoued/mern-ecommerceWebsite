/* ----------------------------- Import globals ----------------------------- */
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* --------------------------------- Screens -------------------------------- */
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
/* ------------------------------- End screens ------------------------------ */
// components:
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/sideDrawer";
function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <SideDrawer></SideDrawer>
        <Backdrop></Backdrop>
        <main>
          <Switch>
            <Route exact path='/' component={HomeScreen}></Route>
            <Route exact path='/product:id' component={ProductScreen}></Route>
            <Route exact path='/cart' component={CartScreen}></Route>
            <Route></Route>
          </Switch>
        </main>
        {/* home screen */}
        {/* product screen */}
        {/* cart screen */}
      </div>
    </Router>
  );
}

export default App;
