import logo from './logo.svg';
import './App.css';
import { Watermark } from 'antd';
import PlanetsDirectory from './components/PlanetsDirectory';

function App() {
  return (
    <Watermark content={"Created By Ravi Bhashkar"} className="h-screen">
    <div className="App">
      <PlanetsDirectory/>
    </div>
      </Watermark>
  );
}

export default App;
