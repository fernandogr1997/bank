import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Internet = () => {
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
        <h4 style={{ color: 'white' }}>Internet</h4>
      </div>

      <div className="page-content">
        {/* internet */}
        <div className="internet">
          <div className="container">
            <h5 className="margin-bottom-small">ID Number <span className="color-primer">Fast Net</span></h5>
            <div className="background-white border-radius box-shadow">
              <form action="#">
                <input type="number" placeholder={'0293000892902020'} />
                <button className="buttons">Check</button>
              </form>
            </div>
            <h5 className="margin-bottom-small">Choose Internet Provider</h5>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-orange">
                      <i className="fa fa-bolt" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Bolt Net Home</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box border-active">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-purple">
                      <i className="fa fa-tachometer-alt" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Fast Net</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-lime">
                      <i className="fa fa-fan" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Palapa Net Service</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-red">
                      <i className="fa fa-shipping-fast" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">BusNet Network</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-blue">
                      <i className="fa fa-rocket" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Jet Network Net</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-box">
                  <div className="float-left margin-right margin-left-small">
                    <span className="icon-big icon-color-pink">
                      <i className="fa fa-paper-plane" />
                    </span>
                  </div>
                  <div className="overflow-hidden text">Net Not Net</div>
                </div>
              </div>
            </div>
            <div className="separator-small" />
          </div>
        </div>
        {/* end internet */}
      </div>

    </>
  );
};
