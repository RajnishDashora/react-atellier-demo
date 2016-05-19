import React, { Component } from 'react';
require('./card.scss');
export default class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <span className="title"><h1>{this.props.heading}</h1></span>
        <button onClick={this.props.action.handler} className='btn'>
          {this.props.action.name}
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  action: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    handler: React.PropTypes.func.isRequired
  }),
  heading: React.PropTypes.string.isRequired
};
