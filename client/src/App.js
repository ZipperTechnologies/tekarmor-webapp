//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  //console.log("test");
  const [selectedShirt, setSelectedShirt] = useState(null);

  const shirts = [
    { src: 'shirt_1.jfif', name: 'shirt_1', stock: 'Number in Stock: N/A', info: 'This is a shirt'},
    { src: 'shirt_2.avif', name: 'shirt_2', stock: 'Number in Stock: N/A', info: 'This is a shirt'},
    { src: 'shirt_3.webp', name: 'shirt_3', stock: 'Number in Stock: N/A', info: 'This is a shirt' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>List of Products</p>

        <div className="shirt-container">
          {shirts.map((shirt, index) => (
            <div className="shirt-block" key={index}>
              <img
                src={shirt.src}
                alt={shirt.name}
                onClick={() => setSelectedShirt(shirt)}
              />
              <p className="shirt-name">{shirt.name}</p>
              <p className="shirt-description">{shirt.stock}</p>
            </div>
          ))}
        </div>

        {/*add more rows of shirts*/}
        {/*add more pictures of the same product within the modal*/}

        {selectedShirt && (
          <div className="modal-overlay" onClick={() => setSelectedShirt(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedShirt.src} alt={selectedShirt.name} />
              <p className="shirt-name">{selectedShirt.name}</p>
              <p className="shirt-description">{selectedShirt.stock}</p>
              <p className="shirt-description">{selectedShirt.info}</p>
              <button onClick={() => setSelectedShirt(null)}>Close</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
