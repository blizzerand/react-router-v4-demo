import React from 'react';
import { Link,Route } from 'react-router-dom';
import  Product  from './Product';

const Products = ({ match }) => {

   const productsData = [
    {
        id: 1,
        name: 'NIKE Liteforce Blue Sneakers',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
        status: 'Available'

    },
    {
        id: 2,
        name: 'U.S. POLO ASSN. Slippers',
        description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
        status: 'Available'

    },
    {
        id: 3,
        name: 'ADIDAS Adispree Running Shoes',
        description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
        status: 'Available'
    },
    {
        id: 4,
        name: 'Lee Cooper Mid Sneakers',
        description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
        status: 'Out of Stock'
    },
   
];
  var linkList = productsData.map( (product) => {
    return(
      <li key={product.id}>
        <Link to={`${match.url}/${product.id}`}>
          {product.name}
        </Link>
      </li>
      )
          
    })
 
  return(
    <div>
     <div style={{ display: 'block',  justifyContent: "space-between" }}>
      <div style={{
        float:'left',
        padding: '10px',
        width: '30%',
        background: '#f0f0f0',
        marginLeft:'auto' }}>

        <h3> Products</h3>
        <ul  style={{ listStyleType: 'none', padding: 0, fontSize:'15px' }}> {linkList} </ul>
      </div>
    </div>
    
    <Route path={`${match.url}/:productId`} render={ (props) => <Product data= {productsData} {...props} />}/>
    <Route exact path={match.url} 
      render={() => (
        <div style={{ textAlign:'center'}}>Please select a product.</div>
    )}/>

    </div>

  )
}

export default Products;