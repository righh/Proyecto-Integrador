import { registerRootComponent } from 'expo';

import App from './App';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import VerificationScreen from "./src/screens/VerificationScreen"
import RegisterScreen from './src/screens/RegisterScreen';
import ProductsSreen from "./src/screens/ProductsScreen"

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(HomeScreen);
