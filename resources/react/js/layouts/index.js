import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Global } from '@emotion/core';

import Alerts from './alerts';
import { GlobalStyles, MainContainer } from './style';

@observer
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <MainContainer>
        <Global styles={GlobalStyles} />
        <Alerts />
        {children}
      </MainContainer>
    );
  }
}

export default Layout;
