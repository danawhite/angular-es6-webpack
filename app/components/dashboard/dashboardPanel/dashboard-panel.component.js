import template from './dashboard-panel.html';
import controller from './dashboard-panel.controller.js';

let dashboardComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'dashboard',
        bindToController: true
    }
};

export default dashboardComponent;