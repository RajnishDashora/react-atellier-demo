require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Card from './card/card.js'

class AppComponent extends React.Component {
  render() {
  	const action = {
  		name: 'log',
  		handler: () => {
  			console.log('Hello world!');
  		}
  	};
  	return (
      <Card action={action} heading='Log Event'/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
