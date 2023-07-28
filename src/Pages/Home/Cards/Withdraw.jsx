import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClientInformation } from '../../../Components/ClientInformation';

export const Withdraw = () => {
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
        display: 'flex'
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
        <h4 style={{ color: 'white' }}>Withdraw</h4>
      </div>




      <div className="page-content">
        {/* withdraw */}
        <div className="withdraw">
          <div className="container">

            <div style={{ marginTop:'20px'}}>
              <ClientInformation />
            </div>

            {/* end profile balance */}
            <div className="separator-small" />
            <h5 className="text-center margin-bottom-small">Amount $</h5>
            <div className="background-white border-radius box-shadow content">
              <form action="#">
                <input type="number" />
              </form>
            </div>
            <div className="separator-small" />
            <h5 className="text-center margin-bottom-small">Withdraw to</h5>
            <div className="row margin-bottom">
              <div className="col">
                <div className="background-white border-radius box-shadow text-center padding-box border-active">
                  <span className="icon-big icon-color-red">
                    <i className="fa fa-university" />
                  </span>
                  <h6 className="font-weight-600">Bank</h6>
                </div>
              </div>
              <div className="col">
                <div className="background-white border-radius box-shadow text-center padding-box">
                  <span className="icon-big fa-stack  icon-color-blue">
                    <i className="fab fa-cc-paypal" />
                  </span>
                  <h6 className="font-weight-600">Paypal</h6>
                </div>
              </div>
              <div className="col">
                <div className="background-white border-radius box-shadow text-center padding-box">
                  <span className="icon-big fa-stack icon-color-orange">
                    <i className="fab fa-cc-stripe " />
                  </span>
                  <h6 className="font-weight-600">Stripe</h6>
                </div>
              </div>
            </div>
            <button className="buttons buttons-full margin-top-small box-shadow">Process</button>
          </div>
        </div>
      </div>

    </>
  );
};
