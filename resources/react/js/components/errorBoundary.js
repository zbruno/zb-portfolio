import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

@observer
class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    /* eslint-disable no-console */
    console.log(
      '%c what is the error:',
      'background: #222; color: rgb(0, 200, 83); display: block;',
      '\n',
      error,
    );
    console.log(
      '%c what is the info:',
      'background: #222; color: rgb(0, 200, 83);',
      '\n',
      info,
    );
    /* eslint-enable no-console */

    // Display the error page
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>Eeek! Something went wrong</div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
