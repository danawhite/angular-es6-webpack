import angular from 'angular';

import Dashboard from './dashboard/dashboardPanel/dashboard-panel';
import Navigation from './navigation/navigation';
import UserLogin from './userLogin/userLogin';

const moduleName = 'app.components';

const componentsModule = angular.module(moduleName, [
    Dashboard,
    Navigation,
    UserLogin
])
.name;

export default componentsModule;