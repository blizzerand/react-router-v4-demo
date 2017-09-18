import React, { Component } from 'react';
import { Link,Route,Switch } from 'react-router-dom';
import Category from './Category';
import Products from './Products';


class App extends Component {
  render() {

  
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item"><Link to="/">Homes</Link></li>
            <li className="nav-item"><Link to="/category">Category</Link></li>
            <li className="nav-item"><Link to="/products">Products</Link></li>
          </ul>
        </nav>
      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/category" component={Category}/>
          <Route path="/products" component={Products}/>
        </Switch>
        
      </div>
    );
  }
}


const Home = (props) => (
  <div>
    <h2>Home</h2>
  </div>
)

 export default App;
    