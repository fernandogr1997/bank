import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LiveChat = () => {
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
        <h4 style={{ color: 'white' }}>LiveChat</h4>
      </div>

      <div>
        <div 
          className="page-content"
          style={{ overflow: 'auto', height: '100vh', }}
        >
          {/* livechat */}
          <div className="livechat">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="content-right">
                    <p>How to deposit?</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img src="images/author.jpg" alt />
                  <div className="content">
                    <p>You just click deposit icon</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="content-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img src="images/author.jpg" alt />
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, possimus.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="content-right">
                    <p>Lorem ipsum dolor sit lrem lorem.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end livechat */}
        </div>
        {/* toolbar bottom */}
        <div 
          className="fast-live toolbar tabbar tabbar-labels toolbar-bottom"
          style={{ 
            position: 'fixed', 
            bottom: '0', 
            left: '0', 
            right: '0', 
            background: '#fff', 
            padding: '30px' 
          }}
        >
          <div className="toolbar-inner">
            <form action="#">
              <i className="fa fa-link fast-ti-left" />
              <input type="text" placeholder="Type a message" />
              <i className="fa fa-paper-plane fast-ti-right" />
            </form>
          </div>
        </div>
        {/* end toolbar bottom */}
      </div>


    </>
  )
}
