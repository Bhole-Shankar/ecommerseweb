import React, { Component } from 'react'

export class Categories extends Component {
  render() {
   let {catename, cateid} = this.props ;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zindex:"1", left: "86%"}}></span>
  <div className="card-body">
    <h5 className="card-title">{catename}</h5>
    <h6 className="card-subtitle mb-2 text-muted">id-{cateid}</h6>
    <a href="/" className="card-link">Card link</a>
   
  </div>
</div>
      </div>
    )
  }
}

export default Categories
