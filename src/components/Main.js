require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Card from './card/card.js'

class AppComponent extends React.Component {
  render() {
    return (
      <Card />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
