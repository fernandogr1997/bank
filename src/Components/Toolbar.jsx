import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation  } from 'react-router-dom';
import './Toolbar.css';

export const Toolbar = () => {
    
  const location = useLocation();

  return (
    <BottomNavigation sx={{ bgcolor: 'white', position: 'fixed', bottom: 0, width: '100%' }} showLabels>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        component={Link}
        to="/home"
        sx={{
          color: '#000',
          '&.Mui-selected': {
            color: 'blue',
          },
        }}
        className={`tab-link ${location.pathname === '/home' ? 'colorlink' : ''}`}
      />
      <BottomNavigationAction
        label="History"
        value="history"
        icon={<HistoryIcon />}
        component={Link}
        to="/history"
        sx={{
          color: '#000',
          '&.Mui-selected': {
            color: 'blue',
          },
        }}
        className={`tab-link ${location.pathname === '/history' ? 'colorlink' : ''}`}
      />
      <BottomNavigationAction
        label="Deposit"
        value="deposit"
        icon={<AccountBalanceWalletIcon />}
        component={Link}
        to="/deposit"
        className={`tab-link ${location.pathname === '/deposit' ? 'colorlink' : ''}`}
      />
      <BottomNavigationAction
        label="Live Chat"
        value="livechat"
        icon={<ChatIcon />}
        component={Link}
        to="/livechat"
        className={`tab-link ${location.pathname === '/livechat' ? 'colorlink' : ''}`}
      />
      <BottomNavigationAction
        label="Account"
        value="account"
        icon={<AccountCircleIcon />}
        component={Link}
        to="/account"
        className={`tab-link ${location.pathname === '/account' ? 'colorlink' : ''}`}
      />
    </BottomNavigation>
  );
};
