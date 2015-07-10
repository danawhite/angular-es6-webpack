class UserService {
    constructor() {

    }
}

const moduleName = 'app.components.userLogin.services.userService.UserService';

const userServiceModule = angular.module(moduleName, [])
.service('UserService', UserService);

export default userServiceModule;