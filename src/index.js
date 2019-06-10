import { createStackNavigator, createAppContainer} from 'react-navigation';

import Caderno from './screens/client/caderno';
import Login from './screens/login';


const AppNavigator = createStackNavigator({
    CadernoClient: {
        screen: Caderno
    },

    Login: {
        screen: Login
    }
}, {
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(AppNavigator);