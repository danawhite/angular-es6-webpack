import angular from 'angular';
import uirouter from 'angular-ui-router';

import homeComponent from './home.component';

const moduleName = 'app.states.home';

const homeModule = angular.module(moduleName, [uirouter]);

homeModule
.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
            url: '/',
            template: '<home></home>'
        })
})
.directive('home', homeComponent)
.name;

export default homeModule;