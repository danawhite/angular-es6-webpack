import template from './navigation.html';
import controller from './navigation.controller';

let navigationComponent = () => ({
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'navigation',
    bindToController: true
});

export default navigationComponent;