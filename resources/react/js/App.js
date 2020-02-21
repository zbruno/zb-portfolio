import React from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import { URLS } from '@globals/constants';
import Layout from '@globals/layouts';
import { HomeView } from '@globals/views';

@observer
class App extends React.Component {
  render () {
    return (
      <Layout>
        <Switch>
          <Route exact path={URLS.view.welcome} component={HomeView} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
