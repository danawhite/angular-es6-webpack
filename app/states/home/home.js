import angular from 'angular';
import uirouter from 'angular-ui-router';

import homeComponent from './home.component';

const homeModuleName = 'app.states.home';

angular.module(moduleName, [uirouter])
    .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
            url: '/',
            template: '<home></home>'
        })
})
.directive('home', homeComponent);

export default homeModuleName;