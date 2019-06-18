import { createStackNavigator } from 'react-navigation';

import signIn from './signIn'
import signUp from './signUp'

export default createStackNavigator({
    signIn:{
        screen: signIn
    },

    signUp:{
        screen: signUp
    },
},{
    defaultNavigationOptions: {
        header: null,
    }
});