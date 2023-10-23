/* components/CustomCursor.js */

import { useEffect, useState } from 'react';

const CustomCursor = ({ era }) => {
  const [cursorSize, setCursorSize] = useState('10px');
  const [cursorBorder, setCursorBorder] = useState('2px solid #ff66cc'); // Retro cursor border

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
    cursor: 'none',
    position: 'fixed',
    top: '-50%', // Adjust this value to position the cursor correctly
    left: '-50%', // Adjust this value to position the cursor correctly
    width: cursorSize,
    height: cursorSize,
    background: 'transparent',
    border: cursorBorder,
    borderRadius: '50%',
  };

  return <div style={cursorStyles}></div>;
};

export default CustomCursor;
