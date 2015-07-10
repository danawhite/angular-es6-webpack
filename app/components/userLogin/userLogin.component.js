import template from './userLogin.html';
import controller from './userLogin.controller';

let userLoginComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'userLogin',
        bindToController: true
    }
};

export default userLoginComponent;