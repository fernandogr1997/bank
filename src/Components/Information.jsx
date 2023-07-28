import React from 'react'

export const Information = () => {
  return (
    <>
    <div className="border-radius-style background-circle background-primer">
        <div className="container">
          <div className="background-white border-radius padding-box-middle box-shadow">
            <div className="row row-no-margin-bottom">
              <div className="col-60">
                <div className="float-left margin-right-small">
                  <img className="people" src="/images/author.jpg" alt />
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

    </>
  )
}
