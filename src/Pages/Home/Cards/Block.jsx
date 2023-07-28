import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Block = () => {
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
        <h4 style={{ color: 'white' }}>Block</h4>
      </div>

      <div
        className="page-content"
        style={{ overflow: 'auto', height: '100vh', }}
      >
        {/* blog */}
        <div className="blog">
          <div className="container">
            <div className="background-white border-radius box-shadow">
              <img className="border-radius-top-left-right float-left margin-bottom-middle" src="" alt />
              <div className="padding-box">
                <h5 className="margin-bottom-5px"><a href>Tomorroy internet discount 30%</a></h5>
                <div className="display-block margin-bottom-small"><span className="margin-right-middle"><i className="fa fa-calendar-alt" /></span>21 January 2020</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae molestias voluptatibus.</p>
              </div>
            </div>
            <div className="separator" />
            <div className="background-white border-radius box-shadow">
              <img className="border-radius-top-left-right float-left margin-bottom-middle" src="" alt />
              <div className="padding-box">
                <h5 className="margin-bottom-5px"><a href>Donation laptop for science children </a></h5>
                <div className="display-block margin-bottom-small"><span className="margin-right-middle"><i className="fa fa-calendar-alt" /></span>21 January 2020</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae molestias voluptatibus.</p>
              </div>
            </div>
            <div className="separator" />
            <div className="background-white border-radius box-shadow">
              <img className="border-radius-top-left-right float-left margin-bottom-middle" src="images/blog2.jpg" alt />
              <div className="padding-box">
                <h5 className="margin-bottom-5px"><a href>Get voucher and cashback now</a></h5>
                <div className="display-block margin-bottom-small"><span className="margin-right-middle"><i className="fa fa-calendar-alt" /></span>21 January 2020</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae molestias voluptatibus.</p>
              </div>
            </div>
            <div className="separator" />
            <div 
              className="pagination" 
              style={{ 
                position: 'fixed', 
                bottom: '0', 
                left: '0', 
                right: '0', 
                background: '#fff', 
                padding: '10px' 
              }}
            >
              <ul>
                <li><a className="box-shadow" href="#">1</a></li>
                <li><a className="box-shadow" href="#">2</a></li>
                <li><a className="box-shadow" href="#">3</a></li>
                <li><a className="box-shadow" href="#">4</a></li>
                <li><a className="box-shadow" href="#">5</a></li>
              </ul>
            </div>
            <div className="separator" />
          </div>
        </div>
        {/* end blog */}
      </div>

    </>
  );
};
