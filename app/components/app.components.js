import angular from 'angular';

import Dashboard from './dashboard/dashboardPanel/dashboard-panel';
import Navigation from './navigation/navigation';
import UserLogin from './userLogin/userLogin';

const componentsModuleName = 'app.components';

angular.module(componentsModuleName, [
    Dashboard,
    Navigation,
    UserLogin
]);

export default componentsModuleName;