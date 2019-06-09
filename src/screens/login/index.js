import { createBottomTabNavigator, createAppContainer} from 'react-navigation';

import signIn from './signIn'
import signUp from './signUp'

export default createBottomTabNavigator({
    signIn:{
        screen: signIn
    },

    signUp:{
        screen: signUp
    },
});