import React from 'react';
import './App.css';
import PicUploadNoCrop from './components/cropper';
import myimg from './gun.png';

function App() {
  return (
    <div>
      <PicUploadNoCrop src={myimg} />
    </div>
  );
}

export default App;
