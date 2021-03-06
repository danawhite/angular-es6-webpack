import template from './home.html';
import controller from './home.controller';

let homeComponent = () => ({
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'home',
    bindToController: true
});

export default homeComponent;