import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Hero from './hero';

@withRouter
@inject('alertStore')
@observer
class Home extends Component {
  static propTypes = {
  };

  render() {
    return (
      <React.Fragment>
        <Hero />
      </React.Fragment>
    );
  }
}

export default Home;
