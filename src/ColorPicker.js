import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ colors }) {
  const [isColorListVisible, setColorListVisibility] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setColorListVisibility(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisibility(false);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-picker">
        <button onClick={handleButtonClick}>Pick a color</button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
      </div>
      {selectedColor && (
        <div className="selected-color" style={{ backgroundColor: selectedColor }}>
          Selected Color: {selectedColor}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
