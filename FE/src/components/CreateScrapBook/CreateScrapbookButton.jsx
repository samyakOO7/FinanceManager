import React from 'react';
import './CreateScrapbookButton.scss';
import backgroundImage from '../../images/background.jpg';

const CreateScrapbookButton = () => {
  return (
    <div className="create-scrapbook-button-container" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <button className="create-scrapbook-button">
        Create a Scrapbook
      </button>
    </div>
  );
};

export default CreateScrapbookButton;