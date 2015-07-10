import angular from 'angular';

import dashboardComponent from './dashboard-panel.component.js';

const moduleName = 'app.components.dashboard';

const dashboardComponentModule = angular.module(moduleName, []);

dashboardComponentModule
    .directive('dashboardComponent', dashboardComponent)
    .name;