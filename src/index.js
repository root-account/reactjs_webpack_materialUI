import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppForms from './components/AppForms';
import AppTbl from './components/AppTbl';
import AppBadges from './components/AppBadges';
import AppButtons from './components/AppButtons';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<AppForms />, document.getElementById('appforms'));
ReactDOM.render(<AppTbl />, document.getElementById('appTbl'));
ReactDOM.render(<AppBadges />, document.getElementById('appBadges'));
ReactDOM.render(<AppButtons />, document.getElementById('appBtns'));

