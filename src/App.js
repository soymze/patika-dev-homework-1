import React from 'react';
import './App.css';
import getData from './lib/service'; // service.js dosyasının yolu

function App() {
  async function main() {
    try {
      const userId = 4; // Test etmek istediğiniz kullanıcı ID'si
      const data = await getData(userId);
      console.log(data); // Verileri konsola log'layın
    } catch (error) {
      console.error('Error:', error);
    }
  }

  React.useEffect(() => {
    main(); // useEffect kullanarak fonksiyonu çağırın
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the User Profile App</h1>
    </div>
  );
}

export default App;