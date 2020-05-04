import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';

class NameField extends React.Component {
  static contextType = LanguageContext;

  getFieldLabel = () => {
    switch (this.context) {
      case 'nl':
        return 'Naam';
      case 'en':
      default:
        return 'Name';
    }
  };

  render() {
    return (
      <div className="name-field ui field">
        <label htmlFor="name" data-testid="label">
          {this.getFieldLabel()}
        </label>
        <input id="name" type="text" />
      </div>
    );
  }
}

export default NameField;
