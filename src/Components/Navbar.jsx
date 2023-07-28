import React from 'react'

export const Navbar = () => {
  return (
    <>
     <div className="title-apps padding-middle background-primer">
        <div className="container">
          <div className="row row-no-margin-bottom">
            <div className="col">
              <h3 className="color-white">Jetpay</h3>
            </div>
            <div className="col">
              <a href="/notification/">
                <span className="icon-middle margin-left-small float-right color-white">
                  <i className="fas fa-bell" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
