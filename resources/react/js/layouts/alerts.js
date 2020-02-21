import ReactDOM from 'react-dom';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Alert } from 'sendy-ui';
import { ALERT_STORE_PROP_TYPES } from '@globals/stores/alert';

const alertRoot = document.querySelector('#react-portal') || document.body;

@inject('alertStore')
@observer
class Alerts extends React.Component {
  static propTypes = {
    alertStore: ALERT_STORE_PROP_TYPES.isRequired,
  };

  componentDidMount() {
    alertRoot.appendChild(this.node);
  }

  componentWillUnmount() {
    alertRoot.removeChild(this.node);
  }

  node = document.createElement('div');

  render() {
    const { alertStore } = this.props;

    return ReactDOM.createPortal(
      <Alert.Container>
        {alertStore.alerts.map(alert => (
          <Alert
            key={alert.id}
            title={alert.title}
            type={alert.type}
          />
        ))}
      </Alert.Container>,
      this.node,
    );
  }
}

export default Alerts;
