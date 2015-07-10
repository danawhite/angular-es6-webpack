import angular from 'angular';

import DashboardPanel from './dashboardPanel/dashboard-panel';

const moduleName = 'app.components.dashboard';

const dashboardComponentsModule = angular.module(moduleName, [
    DashboardPanel
])
.name;

export default dashboardComponentsModule;