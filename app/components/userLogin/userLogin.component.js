import template from './userLogin.html';
import controller from './userLogin.controller';
import './userLogin.css';

let userLoginComponent = () => ({
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'userLogin',
    bindToController: true
});

export default userLoginComponent;