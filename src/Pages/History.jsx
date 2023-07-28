import React from 'react'
import { Toolbar } from '../Components/Toolbar'

export const History = () => {
  return (
    <>
      <div id="tab-2" className="tab page-content">

        <div style={{
          padding: '20px',
          textAlign: 'center',

          backgroundColor: '#9831e0',
        }}
        >
          <h4 style={{ color: 'white' }}>History</h4>
        </div>

        {/* history */}
        <div className="history margin-top">
          <div className="container">
            <h5 className="margin-bottom-small">March</h5>
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="float-left margin-right-middle">
                <span className="icon-big icon-color-green">
                  <i className="fa fa-wallet" />
                </span>
              </div>
              <div className="overflow-hidden">
                <span>20 March 2020</span>
                <h6 className="margin-bottom-5px">Deposit</h6>
                <h4>$350</h4>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="float-left margin-right-middle">
                <span className="icon-big icon-color-pink">
                  <i className="fa fa-donate" />
                </span>
              </div>
              <div className="overflow-hidden">
                <span>05 March 2020</span>
                <h6 className="margin-bottom-5px">Donation to <span><a href className="color-primer">Health Foundation</a></span></h6>
                <h4>$50</h4>
              </div>
            </div>
            <div className="separator-small" />
            <h5 className="margin-bottom-small">February</h5>
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="float-left margin-right-middle">
                <span className="icon-big icon-color-yellow">
                  <i className="fa fa-lightbulb" />
                </span>
              </div>
              <div className="overflow-hidden">
                <span>22 February 2020</span>
                <h6 className="margin-bottom-5px">Electricity</h6>
                <h4>$25</h4>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="float-left margin-right-middle">
                <span className="icon-big icon-color-purple">
                  <i className="fa fa-arrow-alt-circle-down" />
                </span>
              </div>
              <div className="overflow-hidden">
                <span>18 February 2020</span>
                <h6 className="margin-bottom-5px">Withdraw</h6>
                <h4>$100</h4>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="float-left margin-right-middle">
                <span className="icon-big icon-color-red">
                  <i className="fa fa-redo" />
                </span>
              </div>
              <div className="overflow-hidden">
                <span>11 February 2020</span>
                <h6 className="margin-bottom-5px">Transfer to <span><a href className="color-primer">@johndoe66</a></span></h6>
                <h4>$30</h4>
              </div>
            </div>
            <div className="separator-bottom" />
          </div>
        </div>
        {/* end history */}
      </div>



      <Toolbar />
    </>
  )
}
