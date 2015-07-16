import Home from './home/home';
import Dashboard from './dashboard/dashboard.js';

const statesMooduleName = 'app.states';

angular.module(statesMooduleName, [
    Home,
    Dashboard
]);

export default statesMooduleName;