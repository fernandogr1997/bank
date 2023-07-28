import React from 'react'
import { Toolbar } from '../Components/Toolbar'

export const Deposit = () => {
  return (
    <>

<div id="tab-3" className="tab page-content">
<div style={{
          padding: '20px',
          textAlign: 'center',

          backgroundColor: '#9831e0',
        }}
        >
          <h4 style={{ color: 'white' }}>Deposit</h4>
        </div>
  {/* deposit */}
  <div className="deposit margin-top">
    <div className="container">
      <h5 className="text-center margin-bottom-small">Amount $</h5>
      <div className="background-white border-radius box-shadow content">
        <form action="#">
          <input type="number" />
        </form>
      </div>
      <div className="separator-small" />
      <h5 className="text-center margin-bottom-small">Pay with</h5>
      <div className="row margin-bottom">
        <div className="col">
          <div className="background-white border-radius box-shadow text-center padding-box">
            <span className="icon-big icon-color-red">
              <i className="fa fa-university" />
            </span>
            <h6 className="font-weight-600">Bank</h6>
          </div>
        </div>
        <div className="col">
          <div className="background-white border-radius box-shadow text-center padding-box border-active">
            <span className="icon-big fa-stack  icon-color-blue">
              <i className="fab fa-cc-paypal" />
            </span>
            <h6 className="font-weight-600">Paypal</h6>
          </div>
        </div>
        <div className="col">
          <div className="background-white border-radius box-shadow text-center padding-box">
            <span className="icon-big fa-stack icon-color-orange">
              <i className="fab fa-cc-stripe " />
            </span>
            <h6 className="font-weight-600">Stripe</h6>
          </div>
        </div>
      </div>
      <button className="buttons buttons-full margin-top-small box-shadow">Process</button>
    </div>
  </div>
  {/* end deposit */}
  <div className="separator-bottom" />
</div>

    <Toolbar/>
    </>
  )
}
