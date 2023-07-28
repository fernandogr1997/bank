import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Ticket = () => {
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
        <h4 style={{ color: 'white' }}>Ticket</h4>
      </div>

      <div className="page-content">
        {/* tickets */}
        <div className="ticket">
          <div className="container">
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-lime">
                      <i className="fa fa-crow" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>San Diego Zoo Animals <span className="color-primer">$30</span></h6>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Buy</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-purple">
                      <i className="fa fa-swimmer" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Swimming Pool Madrid <span className="color-primer">$35</span></h6>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Buy</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-green">
                      <i className="fa fa-fighter-jet" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>California Army Museum <span className="color-primer">$54</span></h6>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Buy</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-orange">
                      <i className="fa fa-university" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Art and performance hall <span className="color-primer">$12</span></h6>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Buy</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-red">
                      <i className="fas fa-fish" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Paris catfish fishing pool <span className="color-primer">$27</span></h6>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Buy</button>
                </div>
              </div>
            </div>
            <div className="separator-small" />
            <div className="background-white box-shadow border-radius padding-box-middle">
              <div className="row">
                <div className="col-70">
                  <div className="float-left margin-right-middle">
                    <span className="icon-big icon-color-teel">
                      <i className="fa fa-swimming-pool" />
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <h6>Swimming Pool Everton <span className="color-primer">$30</span></h6>
                  </div>
                </div>
                <div className="col-30">
                  <button className="buttons box-shadow">Buy</button>
                </div>
              </div>
            </div>
            <div className="separator" />
          </div>
        </div>
        {/* end tickets */}
      </div>

    </>
  );
};
