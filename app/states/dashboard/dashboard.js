import angular from 'angular';
import uirouter from 'angular-ui-router';

import dashboardComponent from './home.component';

const moduleName = 'app.states.dashboard';

const dashboardModule = angular.module(moduleName, [uirouter]);

dashboardModule
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                template: '<dashboard></dashboard>'
            })
    })
    .directive('home', dashboardComponent)
    .name;

export default dashboardModule;