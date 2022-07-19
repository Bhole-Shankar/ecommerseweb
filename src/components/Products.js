import React, { Component } from 'react'

export class Products extends Component {
  render() {
    let { proname, proid, price, prodes, } = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{proname}</h5>
    <h6 className="card-subtitle mb-2 text-muted">id-{proid}</h6>
    <p className="card-text">Price-{price}</p>
    <p className="card-text">{prodes}</p>
    <a href="/" className="card-link">order now</a>
 
  </div>
</div>
      </div>
    )
  }
}

export default Products
