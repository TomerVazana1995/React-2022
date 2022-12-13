import './App.css';
import MyKitchen from './Class components/MyKitchen.jsx';
import Eheader from './Elements/Eheader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {Eheader}
      <MyKitchen></MyKitchen>
    </div>
  );
}

export default App;
