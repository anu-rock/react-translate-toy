import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import ColorContext from '../../contexts/ColorContext';

class SubmitButton extends React.Component {
  getButtonMarkup = (color) => (
    <button className={`ui ${color} button`} data-testid="button">
      <LanguageContext.Consumer>
        {(value) => this.getButtonText(value)}
      </LanguageContext.Consumer>
    </button>
  );

  getButtonText = (lang) => {
    switch (lang) {
      case 'nl':
        return 'Voorleggen';
      case 'en':
      default:
        return 'Submit';
    }
  };

  render() {
    return (
      <div className="submit-button ui field">
        <ColorContext.Consumer>
          {(color) => this.getButtonMarkup(color)}
        </ColorContext.Consumer>
      </div>
    );
  }
}

export default SubmitButton;
