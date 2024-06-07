import React, {useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState(null);

  useEffect(()=> {
    const handleGet = async () => {
      const Data = await axios.post('getData');
      console.log("Data: ", Data.data);
      setData(Data.data);
    }
    handleGet();
  },[])

  useEffect(()=>{
    if(data != null){
      console.log(data);
    }
  },[data]);

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
