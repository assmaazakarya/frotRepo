import React from 'react'
import "./Cancel.css"

function Cancel() {
  return (
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-5">
      <div className="message-box _success _failed">
        <i className="fa fa-times-circle" aria-hidden="true" />
        <h2> Your payment failed </h2>
        <button className=''> Try again later </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Cancel