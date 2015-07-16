/* @ngInject */
class UserService {
    constructor() {

    }
}

const userServiceModuleName = 'app.components.userLogin.services.userService.UserService';

angular.module(moduleName, [])
    .service('UserService', UserService);

export default userServiceModuleName;