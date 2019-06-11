import { createStackNavigator, createAppContainer} from 'react-navigation';

import Caderno from './screens/client/caderno';
import Fluxo from './screens/manager/fluxo';
import Login from './screens/login';


const AppNavigator = createStackNavigator({
    Fluxo: {
        screen: Fluxo
    },

    Login: {
        screen: Login
    },
    
    Caderno: {
        screen: Caderno
    },

}, {
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(AppNavigator);