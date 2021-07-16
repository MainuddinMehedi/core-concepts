import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './view/Pages/Home/Home';

function App() {
  const nayoks = ['Razzak', 'Salman', 'Bappi', 'Shuvo']

  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]

  const productName = products.map(product => product.name)
  
  const nayokNames = nayoks.map(nayok =>nayok);

  return (
    <div>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
        <Home/>
          
          <Counter></Counter>
          <Users></Users>

    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle={
    border:'1px solid gray ',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    // float:'left',
    textAlign:'center'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

// function Person(props) {
//   const personStyle={
//     backgroundColor:'lightgray',
//     border:'2px solid goldenrod',
//     margin: '10px'
//   }
//   return (
//     <div style={personStyle}>
//       <h1>Name: {props.name}</h1>
//       <h3>Hero of {props.nayika}</h3>
//     </div>
//   )
// }

export default App;
