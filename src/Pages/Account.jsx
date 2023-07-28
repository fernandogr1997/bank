import React from 'react'
import { Toolbar } from '../Components/Toolbar'

export const Account = () => {
  return (
    <>

<div id="tab-5" className="tab page-content">
<div style={{
          padding: '20px',
          textAlign: 'center',

          backgroundColor: '#9831e0',
        }}
        >
          <h4 style={{ color: 'white' }}>Account</h4>
        </div>
  {/* account */}
  <div className="list-pages account-list">
    <div className="background-circle">
      <div className="container">
        <div className="background-white border-radius padding-box-middle box-shadow">
          <div className="row row-no-margin-bottom">
            <div className="col-60">
              <div className="float-left margin-right-small">
                <img className="people" src="images/author.jpg" alt />
              </div>
              <div className="overflow-hidden">
                <h6>John Doe</h6>
                <p>@johndoe97</p>
              </div>
            </div>
            <div className="col-40">
              <button className="buttons float-right letter-spacing margin-top-small">$ 650</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="separator-small" />
    <div className="container">
      <ul>
        <li>
          <a className="border-radius box-shadow" href="/deposit/">
            <span className="margin-right-small icon-small icon-color-purple"><i className="fa fa-wallet" /></span> Deposit <span className="float-right"><i className="fa fa-chevron-right" /></span>
          </a>
        </li>
        <li>
          <a className="border-radius box-shadow" href="/history/">
            <span className="margin-right-small icon-small icon-color-red"><i className="fa fa-history" /></span> History <span className="float-right"><i className="fa fa-chevron-right" /></span>
          </a>
        </li>
        <li>
          <a className="border-radius box-shadow" href="/notification/">
            <span className="margin-right-small icon-small icon-color-purple"><i className="fa fa-bell" /></span> Notification <span className="float-right"><i className="fa fa-chevron-right" /></span>
          </a>
        </li>
        <li>
          <a className="border-radius box-shadow" href="/livechat/">
            <span className="margin-right-small icon-small icon-color-green"><i className="fa fa-comments" /></span> Live Chat <span className="float-right"><i className="fa fa-chevron-right" /></span>
          </a>
        </li>
        <li>
          <a className="border-radius box-shadow" href="/about-us/">
            <span className="margin-right-small icon-small icon-color-lime"><i className="fa fa-star" /></span> About us <span className="float-right"><i className="fa fa-chevron-right" /></span>
          </a>
        </li>
        <li>
          <a className="border-radius box-shadow" href="/contact-us/">
            <span className="margin-right-small icon-small icon-color-green"><i className="fa fa-envelope" /></span> Contact us <span className="float-right"><i className="fa fa-chevron-right" /></span>
          </a>
        </li>
        <li>
          <a className="border-radius box-shadow" href="/logout/">
            <span className="margin-right-small icon-small icon-color-orange"><i className="fa fa-power-off" /></span> Logout <span className="float-right"><i className="fa fa-chevron-right" /></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  {/* end account */}
  <div className="separator-bottom" />
</div>

      <Toolbar/>
    </>
  )
}
