import React from 'react'
import { Link } from 'react-router-dom'

export const Cards = () => {
  return (
    <>
    <div className="menus">
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/withdraw/">
                <div className="background-white text-center border-radius padding-box box-shadow">
                  <span className="icon-big icon-color-green"><i className="fa fa-arrow-alt-circle-down" /></span>
                  <h6 className="font-weight-500">Withdraw</h6>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/transfer/">
                <div className="background-white text-center border-radius padding-box box-shadow">
                  <span className="icon-big icon-color-red"><i className="fa fa-redo" /></span>
                  <h6 className="font-weight-500">Transfer</h6>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/voucher/">
                <div className="background-white text-center border-radius padding-box box-shadow">
                  <span className="icon-big icon-color-purple"><i className="fa fa-gift" /></span>
                  <h6 className="font-weight-500">Voucher</h6>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/internet/">
                <div className="background-white text-center border-radius padding-box box-shadow">
                  <span className="icon-big icon-color-teal"><i className="fa fa-wifi" /></span>
                  <h6 className="font-weight-500">Internet</h6>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/ticket/">
                <div className="background-white text-center border-radius padding-box box-shadow">
                  <span className="icon-big icon-color-orange"><i className="fa fa-ticket-alt" /></span>
                  <h6 className="font-weight-500">Ticket</h6>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/events/">
                <div className="background-white text-center border-radius padding-box box-shadow">
                  <span className="icon-big icon-color-blue"><i className="fa fa-calendar-alt" /></span>
                  <h6 className="font-weight-500">Events</h6>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/electricity/">
                <div className="background-white text-center border-radius padding-box box-shadow">
                  <span className="icon-big icon-color-yellow"><i className="fa fa-lightbulb" /></span>
                  <h6 className="font-weight-500">Electricity</h6>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/donation/">
                <div className="background-white text-center border-radius padding-box box-shadow">
                  <span className="icon-big icon-color-pink"><i className="fa fa-donate" /></span>
                  <h6 className="font-weight-500">Donation</h6>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/block/">
                <div className="background-white text-center border-radius padding-box box-shadow">
                  <span className="icon-big icon-color-lime"><i className="fa fa-file" /></span>
                  <h6 className="font-weight-500">Block</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
