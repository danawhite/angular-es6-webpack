import template from './navigation.html';
import controller from './navigation.controller';

let navigationComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'navigation',
        bindToController: true
    }
};

export default navigationComponent;
export default navigationComponent;