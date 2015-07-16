import navigationComponent from './navigation.component';

const navigationModuleName = 'app.components.navigation';

angular.module(navigationModuleName, [])
    .directive('navigation', navigationComponent);

export default navigationModuleName;