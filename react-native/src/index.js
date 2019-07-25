import { createStackNavigator, createAppContainer } from 'react-navigation';

import Preload from './screens/preload';
import Client from './screens/client/';
import Fluxo from './screens/manager/fluxo';
import Login from './screens/login';


const AppNavigator = createStackNavigator({
    Preload: {
        screen: Preload
    },
    
    Login: {
        screen: Login
    },
    
    Client: {
        screen: Client
    },
    
    Fluxo: {
        screen: Fluxo
    },
    
}, {
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(AppNavigator);