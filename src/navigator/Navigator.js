import {createStackNavigator, createSwitchNavigator, createAppContainer} from "react-navigation";
import LoginPage from '../page/LoginPage';
import SignInScreen from '../page/SignInScreen';
import AuthLoadingPage from '../page/AuthLoadingPage';
import OtherScreen from '../page/OtherScreen';
import HomePage from "../page/HomePage";


const AppStack = createStackNavigator(
  {
    LoginPage: LoginPage,
    Other: OtherScreen,
    HomePage: {
      screen: HomePage
    }
  }
);
const AuthStack = createStackNavigator(
  {SignIn: SignInScreen}
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingPage,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

