import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Voucher = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div style={{
        padding: '20px',
        textAlign: 'left',
        backgroundColor: '#9831e0',
        display: 'flex',
        marginBottom:'20px',
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
        <h4 style={{ color: 'white' }}>Voucher</h4>
      </div>

      <div className="page-content">
        {/* voucher */}
        <div className="voucher">
          <div className="container">
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-yellow">
                      <i className="fa fa-lightbulb" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h5>Electricity discount 20%</h5>
                    <span>Untill: 20 March 2020</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Claim</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-blue">
                      <i className="fa fa-wifi" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h5>Internet Cashback 8%</h5>
                    <span>Untill: 15 February 2020</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Claim</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-green">
                      <i className="fa fa-calendar-alt" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h5>Envato Events Disocunt 50%</h5>
                    <span>Untill: 19 January 2020</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Claim</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-orange">
                      <i className="fa fa-ticket-alt" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h5>Ticket Zoo Camel Discount 5%</h5>
                    <span>Untill: 23 March 2021</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Claim</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-purple">
                      <i className="fa fa-calendar-alt" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h5>UI/UX Design Meetup Free</h5>
                    <span>Untill: 23 March 2021</span>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Claim</button>
                </div>
              </div>
            </div>
            <div className="separator" />
          </div>
        </div>
        {/* end voucher */}
      </div>

    </>
  );
};
