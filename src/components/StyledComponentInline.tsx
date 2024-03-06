import React from 'react';

const StyledComponent = () => {


  const inlineStyles = {
    container: {
      padding: '20px',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
    },
    text: {
      color: 'blue',
      fontSize: '18px',
    },
  };

  return (
    <div style={inlineStyles.container}>
      <h2 style={inlineStyles.text}>Styled Component</h2>
      <p style={inlineStyles.text}>This component uses inline styles.</p>
    </div>
  );
};

export default StyledComponent;
