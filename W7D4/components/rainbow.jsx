import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';
import Indigo from './indigo';
import Orange from './orange';
import Yellow from './yellow';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        <NavLink exact to='/red'>Red</NavLink>
        <NavLink exact to='/green'>Green</NavLink>
        <NavLink exact to='/blue'>Blue</NavLink>
        <NavLink exact to='/violet'>Violet</NavLink>
        <NavLink exact to='/blue/indigo'>Indigo</NavLink>
        <NavLink exact to='/red/orange'>Orange</NavLink>
        <NavLink exact to='/red/yellow'>Yellow</NavLink>

        <div id="rainbow">
          <Route path="/red" component={Red} />
          <Route path="/green" component={Green} />
          <Route path="/blue" component={Blue} />
          <Route path="/violet" component={Violet} />
          <Route path="/blue/indigo" component={Indigo} />
          <Route path="/red/orange" component={Orange} />
          <Route path="/red/yellow" component={Yellow} />

        </div>
      </div>
    );
  }
};

export default Rainbow;
