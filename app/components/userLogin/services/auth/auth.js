import angular from 'angular';

import AuthService from './auth.service';

const moduleName = 'app.components.userLogin.services.auth.Auth';

const authModule = angular.module(moduleName, [])
    .service('AuthService', AuthService);

export default authModule;