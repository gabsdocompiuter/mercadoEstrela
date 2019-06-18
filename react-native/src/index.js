import { createStackNavigator, createAppContainer } from 'react-navigation';

import Client from './screens/client/';
import Fluxo from './screens/manager/fluxo';
import Login from './screens/login';


const AppNavigator = createStackNavigator({
    Client: {
        screen: Client
    },
    
    Fluxo: {
        screen: Fluxo
    },

    Login: {
        screen: Login
    },
    

}, {
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(AppNavigator);