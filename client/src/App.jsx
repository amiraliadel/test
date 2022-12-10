import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './App.module.css';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/sendRes/', {
          withCredentials: true
        });
        if (res.status === 200) {
          setMsg(res.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  });
  
  return (<>
    <div className={styles.app}>
      <h1>Welcome to my web site.</h1>
      <h2>{msg}</h2>
    </div>
  </>);
}

export default App;
