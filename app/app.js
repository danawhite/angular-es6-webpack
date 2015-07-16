import angular from './angular'
import uirouter from 'angular-ui-router';

import appComponent from './app.component';

const appModuleName = 'app';

angular.module(appModuleName, [])
    .directive('app', appComponent);
