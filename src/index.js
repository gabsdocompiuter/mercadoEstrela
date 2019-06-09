import { createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './screens/login'

const AppNavigator = createStackNavigator({
    Login:{
        screen: Login
    }
},{
    defaultNavigationOptions: {
        header: null
    }
});

export default createAppContainer(AppNavigator);