import template from './home.html';
import controller from './home.controller';

let homeComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'home',
        bindToController: true
    }
};

export default homeComponent;