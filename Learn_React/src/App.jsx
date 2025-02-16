import { useState } from 'react';
import './App.css';

function App() {
  // Sayacı (counter) yönetmek için useState kullanıyoruz.
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Hello React! 🚀</h1>
      <p>This is my first React projeckt.</p>
      
      <button onClick={() => setCount(count + 1)}>
        counter: {count}
      </button>
    </div>
  );
}

export default App;
