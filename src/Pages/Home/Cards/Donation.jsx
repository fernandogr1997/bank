import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Donation = () => {
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
        <h4 style={{ color: 'white' }}>Donation</h4>
      </div>

      <div className="page-content">
        {/* donation */}
        <div className="donation">
          <div className="container">
            <h5 className="margin-bottom-small">Donate to  <span className="color-primer">Health Foundation</span></h5>
            <div className="background-white border-radius box-shadow">
              <form action="#">
                <input type="text" defaultValue="$50" />
                <button className="buttons">Send</button>
              </form>
            </div>
            <h5 className="margin-bottom-small">Choose you want to Donate</h5>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box border-active">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-red">
                      <i className="fas fa-medkit" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Health Foundation</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-blue">
                      <i className="fas fa-child" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Children Science</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-green">
                      <i className="fas fa-tree" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Go Green</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-pink">
                      <i className="fa fa-heart" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Love Foundation</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-red">
                      <i className="fa fa-spider" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Spider Foundation</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-teel">
                      <i className="fa fa-cat" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Cat Foundation </div>
                </div>
              </div>
            </div>
            <div className="separator-small" />
          </div>
        </div>
        {/* end donation */}
      </div>

    </>
  );
};
