import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let { name, id, price, } = this.props;
    return (

      <div className="card"  >
        <div className="card-body">
          <h5 className="card-title" >{name}</h5>
          <p className="card-text">{price}</p>
          <p className="card-text"><small className="text-muted"> id - {id}</small></p>
        </div>
      </div>

    )
  }
}
export default Newsitem