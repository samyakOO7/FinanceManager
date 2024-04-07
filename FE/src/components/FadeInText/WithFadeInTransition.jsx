// WithFadeInTransition.js
import React, { useState, useEffect } from 'react';

const WithFadeInTransition = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
      <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return EnhancedComponent;
};

export default WithFadeInTransition; // Correct the export statement
