import React from 'react'
import producsData from './data/vschoolProducts'
import Product from './components/Product'


function App() {
  
  const productComponents = producsData.map(item => <Product key={item.id} product={item}/>)

  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App