import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Electricity = () => {
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
        <h4 style={{ color: 'white' }}>Electricity</h4>
      </div>

      <div className="page-content">
        {/* electricity */}
        <div className="electricity">
          <div className="container">
            <h5 className="margin-bottom-small">ID Number Electricity</h5>
            <div className="background-white border-radius box-shadow">
              <form action="#">
                <input type="number" placeholder={'0293000892902020'} />
              </form>
            </div>
            <div className="row margin-bottom-small">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-small text-center">
                  <h6>$25</h6>
                </div>
              </div>
              <div className="col">
                <div className="background-white border-radius box-shadow padding-small text-center border-active">
                  <h6>$50</h6>
                </div>
              </div>
              <div className="col">
                <div className="background-white border-radius box-shadow padding-small text-center">
                  <h6>$75</h6>
                </div>
              </div>
            </div>
            <div className="row margin-bottom-small">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-small text-center">
                  <h6>$100</h6>
                </div>
              </div>
              <div className="col">
                <div className="background-white border-radius box-shadow padding-small text-center">
                  <h6>$125</h6>
                </div>
              </div>
              <div className="col">
                <div className="background-white border-radius box-shadow padding-small text-center">
                  <h6>$150</h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="background-white border-radius box-shadow padding-small text-center">
                  <h6>$175</h6>
                </div>
              </div>
              <div className="col">
                <div className="background-white border-radius box-shadow padding-small text-center">
                  <h6>$200</h6>
                </div>
              </div>
              <div className="col">
                <div className="background-white border-radius box-shadow padding-small text-center">
                  <h6>$250</h6>
                </div>
              </div>
            </div>
            <button className="buttons buttons-full">Process</button>
            <div className="separator-small" />
          </div>
        </div>
        {/* end electricity */}
      </div>

    </>
  );
};
