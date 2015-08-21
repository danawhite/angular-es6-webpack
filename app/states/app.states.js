import Home from './home/home';
import Dashboard from './dashboard/dashboard.js';

const statesModuleName = 'app.states';

angular.module(statesModuleName, [
    Home,
    Dashboard
]);

export default statesModuleName;