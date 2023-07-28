import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ClientInformation } from '../../../Components/ClientInformation';

export const Transfer = () => {
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
        <h4 style={{ color: 'white' }}>Transfer</h4>
      </div>

      <div className="page-content">
        {/* transfer */}
        <div className="transfer">
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
            <h5 className="text-center margin-bottom-small">Transfer to</h5>
            <form>
              <input type="text" placeholder="Email/Username" />
            </form>
            <button className="buttons buttons-full margin-top-small box-shadow">Transfer Now</button>
          </div>
        </div>
        {/* end transfer */}
      </div>

    </>
  );
};
