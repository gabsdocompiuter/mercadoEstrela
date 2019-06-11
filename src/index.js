import { createStackNavigator, createAppContainer} from 'react-navigation';

import Caderno from './screens/client/caderno';
import Login from './screens/login';


const AppNavigator = createStackNavigator({
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