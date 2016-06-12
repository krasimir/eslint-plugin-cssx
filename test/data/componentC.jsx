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

    let style = <style>
      h1 {
        color: {{ this.state.color }};
      }
      h1 i {
        text-decoration: underline;
      }
      @media (max-width: 600px) {
        h1 {
          color: red;
        }
      }
    </style>;

    return (
      <h1 title="blah">
      <span>Hello</span>
      </h1>
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
