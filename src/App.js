import React from 'react';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
