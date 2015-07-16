import template from './dashboard.html';
import controller from './dashboard.controller';
import './dashboard.css';

let dashboardComponent = ({
    restrict: 'E',
    scope: {},
    controller,
    controllerAs: 'dashboard',
    bindToController: true,
    template
});

export default dashboardComponent;