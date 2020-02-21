import { observable, action, computed } from 'mobx';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

export default class AlertStore {
  @observable
  alertsMap = new Map();

  @computed
  get alerts() {
    return Array.from(this.alertsMap.values());
  }

  @action
  add(title, type = 'danger') {
    const id = `alert__${v4()}`;
    const alert = { id, type, title };
    this.alertsMap.set(alert.id, alert);
  }

  @action
  removeAlert = alertId => {
    this.alertsMap.delete(alertId);
  };
}

export const ALERT_STORE_PROP_TYPES = PropTypes.shape({
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      content: PropTypes.node,
    }),
  ),
  add: PropTypes.func.isRequired,
  removeAlert: PropTypes.func.isRequired,
});
