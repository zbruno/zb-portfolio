import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Typography from 'typography';
import oceanBeachTheme from 'typography-theme-ocean-beach';
import { TypographyStyle, GoogleFont } from 'react-typography';

import Alerts from './alerts';
import { MainContainer } from './style';

const typography = new Typography(oceanBeachTheme);

@observer
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <MainContainer>
          <Alerts />
          {children}
        </MainContainer>
      </>
    );
  }
}

export default Layout;
