import dashboardComponent from './dashboard-panel.component';

const dashboardPanelModuleName = 'app.components.dashboard';

angular.module(moduleName, [])
    .directive('dashboardComponent', dashboardComponent);

export default dashboardPanelModuleName;