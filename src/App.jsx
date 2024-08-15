import Product from './components/Profile/Profile/Profile';
import Friendlist from './components/Friendlist/friendlist';
import TransactionHistory from './components/TransactionHistory/transactionhistory';

function App() {
  return (
    <div className="App">
      <Product />
      <Friendlist />
      <TransactionHistory />
    </div>
  );
}

export default App;