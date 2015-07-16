import template from './app.html';
import controller from './app.controller';

let appComponent = () => ({
    restrict: 'E',
    scope: {},
    controller,
    controllerAs: 'app',
    bindToController: true,
    template
});

export default appComponent;