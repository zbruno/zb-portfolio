import React from 'react';
import PropTypes from 'prop-types';

class OffClickWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    utilityClasses: PropTypes.string,
    onOffClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    utilityClasses: '',
  };

  static containerRef = React.createRef();

  componentDidMount() {
    this.addOffClickListener();
  }

  componentWillUnmount() {
    this.removeOffClickListener();
  }

  addOffClickListener = () => {
    document.addEventListener('click', this.handleOffClick, false);
  };

  removeOffClickListener = () => {
    document.removeEventListener('click', this.handleOffClick, false);
  };

  handleOffClick = event => {
    const node = this.containerRef.current;
    const { onOffClick } = this.props;

    if (!node) {
      return;
    }

    if (node.contains(event.target)) {
      return;
    }

    onOffClick(event);
  };

  render() {
    const { children, utilityClasses } = this.props;

    return (
      <div ref={this.containerRef} className={utilityClasses}>
        {children}
      </div>
    );
  }
}

export default OffClickWrapper;
