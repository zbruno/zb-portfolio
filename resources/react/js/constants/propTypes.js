import PropTypes from 'prop-types';

export const HISTORY_PROP_TYPES = PropTypes.shape({
  action: PropTypes.string,
  block: PropTypes.func,
  push: PropTypes.func,
  replace: PropTypes.func,
});

export const LOCATION_PROP_TYPES = PropTypes.shape({
  hash: PropTypes.string,
  key: PropTypes.string,
  pathname: PropTypes.string,
  search: PropTypes.string,
});

export const MATCH_PROP_TYPES = PropTypes.shape({
  isExact: PropTypes.bool,
  params: PropTypes.shape({}),
  path: PropTypes.string,
  url: PropTypes.string,
});
