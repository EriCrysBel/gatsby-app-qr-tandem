import React, { useState } from 'react'

const InputUrlCrearQr = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    };
    const handleColorChange = (color) => {
      setQrColor(color);
      };
      const handleSizeChange = (size) => {
        setQrSize(parseInt(size, 10));
      };
      const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta']; // Colores ampliados
  return (
    <>
    <div className='container'>
    <p>Introduce tu texto o url aquí:</p>
    <input type="text" value={inputValue} onChange={handleInputChange} />
    <QrComponent
      onColorChange={handleColorChange}
      onSizeChange={handleSizeChange}
      colorOptions={colorOptions}
    />
    </div>
    </>
  )
}

export default InputUrlCrearQr