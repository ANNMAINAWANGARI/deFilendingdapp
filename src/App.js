import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Borrowpage from './pages/Borrowpage';
import Homepage from './pages/Homepage';
import Lendingpage from './pages/Lendingpage';
import Stakingpage from './pages/Stakingpage';
import PayOffpage from './pages/PayOffpage';
import MarketsPage from './pages/MarketsPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/borrow" element={<Borrowpage />} />
        <Route path="/lend" element={<Lendingpage />} />
        <Route path="/stake" element={<Stakingpage />} />
        <Route path="/payoff" element={<PayOffpage />} />
        <Route path="/market" element={<MarketsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
