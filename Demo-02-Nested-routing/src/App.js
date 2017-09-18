import React, { Component } from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import Category from './Category';


class App extends Component {
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul> 
       </nav>
      
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/category" component={Category}/> 
    </Switch>
    
    </div>
    );
  }
}


const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
)


const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)


export default App;
    