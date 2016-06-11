import React from 'react';
import ReactDOM from 'react-dom';
import PureComponent from 'react-pure-render/component';
import cx from 'classnames';

export default class Button extends PureComponent {

  render() {

    let style = {
      color: '#fff',
      backgroundColor: '#333'
    };

    let className = cx(
      this.props.className,
      'c-button v-bs1'
    );

    return (
      <button className={ className } style={ style } onClick={ this.props.onClick } ref='button'>
        { this.props.children }
      </button>
    );
  }

  focus() {
    ReactDOM.findDOMNode(this.refs.button).focus();
  }
}

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
};
