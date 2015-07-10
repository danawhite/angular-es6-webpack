import angular from 'angular';

import userLoginComponent from './userLogin.component';
import Auth from './services/auth/auth';
import User from './services/user/user';

const moduleName = 'app.components.userLogin';

const userLoginModule = angular.module(moduleName, [
    Auth,
    User
])
.directive('userLogin', userLoginComponent);