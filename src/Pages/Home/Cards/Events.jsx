import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Events = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        style={{
          padding: '20px',
          textAlign: 'left',
          backgroundColor: '#9831e0',
          display: 'flex',
          marginBottom: '20px',
        }}>
        <i
          style={{
            fontSize: '24px',
            color: '#fff',
            marginRight: '30px',
            cursor: 'pointer',

          }}
          className="fa fa-angle-left" aria-hidden="true"
          onClick={handleGoBack}
        />
        <h4 style={{ color: 'white' }}>Events</h4>
      </div>

      <div className="page-content">
        {/* events */}
        <div className="events">
          <div className="container">
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-small icon-color-green">
                      <i className="fa fa-lightbulb" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Envato Meetup California</h6>
                    <span>18 - 20 March 2020</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Register</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-small icon-color-blue">
                      <i className="fa fa-laptop" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Web Design Conference</h6>
                    <span>12 - 15 February 2020</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Register</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-small icon-color-lime">
                      <i className="fa fa-calendar-alt" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Increase Business Quickly</h6>
                    <span>15 - 19 January 2020</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Register</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-small icon-color-orange">
                      <i className="fa fa-ticket-alt" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Export Import Workshop</h6>
                    <span>20 - 23 March 2021</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Register</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-small icon-color-purple">
                      <i className="fa fa-mobile" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Mobile Design Show 2020</h6>
                    <span>19 - 23 March 2021</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Register</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-small icon-color-yellow">
                      <i className="fa fa-mobile" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Gallery Samsung Mobile</h6>
                    <span>19 - 23 April 2021</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Register</button>
                </div>
              </div>
            </div>
            <div className="separator" />
          </div>
        </div>
        {/* end events */}
      </div>

    </>
  );
};
