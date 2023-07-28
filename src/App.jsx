import { Route, Routes } from 'react-router-dom';

import { Home } from './Pages/Home/Home';
import { Account } from './Pages/Account';
import { Deposit } from './Pages/Deposit';
import { History } from './Pages/History';
import { LiveChat } from './Pages/LiveChat';

import { Withdraw } from './Pages/Home/Cards/Withdraw';
import { Transfer } from './Pages/Home/Cards/Transfer';
import { Voucher } from './Pages/Home/Cards/Voucher';
import { Internet } from './Pages/Home/Cards/Internet';
import { Ticket } from './Pages/Home/Cards/Ticket';
import { Events } from './Pages/Home/Cards/Events';
import { Electricity } from './Pages/Home/Cards/Electricity';
import { Donation } from './Pages/Home/Cards/Donation';
import { Block } from './Pages/Home/Cards/Block';

import './App.css';

function App() {

  return (
    <>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />

        <Route path="/account" element={<Account />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/history" element={<History />} />
        <Route path="/livechat" element={<LiveChat />} />

        <Route path="/withdraw/" element={<Withdraw />} />
        <Route path="/transfer/" element={<Transfer />} />
        <Route path="/voucher/" element={<Voucher />} />
        <Route path="/internet/" element={<Internet />} />
        <Route path="/ticket/" element={<Ticket />} />
        <Route path="/events/" element={<Events />} />
        <Route path="/electricity/" element={<Electricity />} />
        <Route path="/donation/" element={<Donation />} />
        <Route path="/block/" element={<Block />} />

      </Routes>

    </>
  )
}

export default App
