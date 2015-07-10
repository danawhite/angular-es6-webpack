import angular from 'angular';

import navigationComponent from './navigation.component';

const moduleName = 'app.components.navigation';

const navigationModule = angular.module(moduleName, []);

navigationModule
    .directive('navigation', navigationComponent)
    .name;

export default navigationModule;