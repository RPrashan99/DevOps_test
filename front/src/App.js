import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState('');

  const handleGet = async() => {
    const {Data} = await axios.get('api/');
    setData(Data);
  }

  useEffect(()=> {
    handleGet();
  },[])

  return (
    <div className="App">
      <div>Frontend Application</div>
      {
        data && <div>Data obtained: {data}</div>
      }
    </div>
  );
}

export default App;
