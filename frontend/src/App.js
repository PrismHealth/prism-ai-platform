import React, { useState } from 'react';
import FileUpload from './FileUpload';
import PresentationView from './PresentationView';
import './App.css';

function App() {
  const [view, setView] = useState('upload');

  return (
    <div className="App">
      <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <button 
          onClick={() => setView('upload')} 
          style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: view === 'upload' ? '#667eea' : '#ddd', color: view === 'upload' ? 'white' : 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Risk Assessment
        </button>
        <button 
          onClick={() => setView('presentation')} 
          style={{ padding: '10px 20px', backgroundColor: view === 'presentation' ? '#667eea' : '#ddd', color: view === 'presentation' ? 'white' : 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Platform Overview
        </button>
      </div>
      
      {view === 'upload' ? <FileUpload /> : <PresentationView />}
    </div>
  );
}

export default App;
