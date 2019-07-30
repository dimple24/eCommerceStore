import React ,{ Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';
import Checkout from './Components/Checkout';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar />
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} />
                <Route  component={Default} />
              </Switch>
              <Modal />
        </React.Fragment>
  );
}
}
export default App;
