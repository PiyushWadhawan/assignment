import './App.css';
import Header from './components/Header';
import HotelDescription from './components/HotelDescription';
import HotelImage from './components/HotelImage';
import HotelRules from './components/HotelRules';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="container">
      <Header/>
      <Introduction/>
      <HotelImage/>
      <HotelDescription/>
      <HotelRules/>
    </div>
  );
}

export default App;
