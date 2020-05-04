import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import CreateUserForm from './CreateUserForm/CreateUserForm';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { lang: 'en', color: 'red' };

  onFlagClicked = (lang) => {
    this.setState({ lang });
  };

  onColorClicked = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="ui container">
        <Toolbar
          onFlagClicked={this.onFlagClicked}
          onColorClicked={this.onColorClicked}
        />

        <LanguageContext.Provider value={this.state.lang}>
          <ColorContext.Provider value={this.state.color}>
            <CreateUserForm />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
