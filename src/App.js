import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Fetching data from API...');
    fetch('http://127.0.0.1:5000')
      .then(response => {
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched:', data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data from Flask API</h1>
        {data ? <p>{data.message}</p> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
