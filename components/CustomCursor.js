import { useEffect, useState } from 'react';

const CustomCursor = ({ era }) => {
  const [cursorStyle, setCursorStyle] = useState('none');
  const [cursorSize, setCursorSize] = useState('20px');
  const [cursorBorder, setCursorBorder] = useState('2px solid #0070f3'); // Default border

  useEffect(() => {
    // Define cursor styles for different eras
    const eraStyles = {
      retro: {
        cursorSize: '10px',
        cursorBorder: '2px solid #ff66cc', // Retro cursor border
      },
      'mid-century': {
        cursorSize: '15px',
        cursorBorder: '2px solid #ff9900', // Mid-century cursor border
      },
      'neon-future': {
        cursorSize: '25px',
        cursorBorder: '2px solid #ff33cc', // Neon-future cursor border
      },
    };

    // Update cursor styles based on the era
    setCursorSize(eraStyles[era].cursorSize);
    setCursorBorder(eraStyles[era].cursorBorder);

  }, [era]);

  const cursorStyles = {
    cursor: cursorStyle,
    position: 'fixed',
    top: '0',
    left: '0',
    width: cursorSize,
    height: cursorSize,
    background: 'transparent',
    border: cursorBorder, // Set based on the era
    borderRadius: '50%',
  };

  return <div style={cursorStyles}></div>;
};

export default CustomCursor;
