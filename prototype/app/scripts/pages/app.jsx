import React, { Component } from 'react'
import Header from '../components/header.jsx'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          {this.props.children}
        </div>
      </div>
  )
}
}

// export default App;
//
//
// import React, { Component } from 'react'
// import ProductsContainer from './ProductsContainer'
// import CartContainer from './CartContainer'
//
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Shopping Cart Example</h2>
//         <hr/>
//         <ProductsContainer />
//         <hr/>
//         <CartContainer />
//       </div>
//     )
//   }
// }
