import React from 'react'
import ReactAtellier from 'react-atellier';
import Card from '../card/card.js';

export default React.createClass({

  render() {
  	const todo = {
  		name: 'log',
  		handler: () => {
  			console.log('Hello world!');
  		}
  	};
  	const componentList = [{
  		componentName : 'Card',
  		component : <Card action={todo} heading='Log Event'/>
		}];
    return (
    	<div>
    		<ReactAtellier components={componentList} />
    	</div>
    );
  }
})
