import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-css-only';
import 'fontawesome';
import './scss/style.scss';

import MainNav from './components/common/MainNav';
import Result from './components/repositories/Result';


class App extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Result />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
