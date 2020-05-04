import React from 'react';

const Toolbar = ({ onFlagClicked, onColorClicked }) => {
  return (
    <div className="ui grid">
      <div className="three wide column right aligned">Select language:</div>
      <div className="three wide column left aligned">
        <i
          className="flag us"
          onClick={() => onFlagClicked('en')}
          data-testid="flag-en"
        ></i>
        <i
          className="flag nl"
          onClick={() => onFlagClicked('nl')}
          data-testid="flag-nl"
        ></i>
      </div>
      <div className="three wide column right aligned">Select color:</div>
      <div className="three wide column left aligned">
        <button
          className="ui red compact button"
          onClick={() => onColorClicked('red')}
          data-testid="color-red"
        ></button>
        <button
          className="ui yellow compact button"
          onClick={() => onColorClicked('yellow')}
          data-testid="color-yellow"
        ></button>
        <button
          className="ui blue compact button"
          onClick={() => onColorClicked('blue')}
          data-testid="color-blue"
        ></button>
      </div>
    </div>
  );
};

export default Toolbar;
