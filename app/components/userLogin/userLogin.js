import userLoginComponent from './userLogin.component';
import Auth from './services/auth/auth';
import User from './services/user/user';

const userLoginModuleName = 'app.components.userLogin';

angular.module(userLoginModuleName, [
    Auth,
    User
])
.directive('userLogin', userLoginComponent);

export default userLoginModuleName;