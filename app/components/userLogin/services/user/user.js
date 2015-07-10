import angular from 'angular';

import UserService from './user.service';

const moduleName = 'app.components.userLogin.services.user.User';

const userModule = angular.module(moduleName, [])
    .service('UserService', UserService);

export default userModule;