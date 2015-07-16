import template from './dashboard-panel.html';
import controller from './dashboard-panel.controller.js';
import './dashboard-panel.css';

let dashboardComponent = () => ({
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'dashboard',
    bindToController: true
});

export default dashboardComponent;