import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Authentication/Home'
import RouteConstants from '../constants/RouteConstants';

const AuthenticationStack = createStackNavigator();
export default ({ isLogin, user }) => {

    const getInitialRootname = () => {
        const authStore = store.getState().authentication;
        const isUserLogin = authStore.isLogin;
        const { pinCode } = user;

        let initialRouteName = '';
        if (isUserLogin) {
            if (!pinCode) {
                initialRouteName = RouteConstants.GENERATE_PIN;
            } else if (selectedFeedyard === null) {
                initialRouteName = RouteConstants.FEEDYARD_LIST;
            } else {
                initialRouteName = RouteConstants.MAIN;
            }
        } else {
            initialRouteName = RouteConstants.LOGIN;
        }
        return initialRouteName;
    };

    return (
        <AuthenticationStack.Navigator
            headerMode="none"
            initialRouteName={RouteConstants.HOME}>
            <AuthenticationStack.Screen name={RouteConstants.HOME} component={HomeScreen} options={{ title: 'Welcome' }} />
        </AuthenticationStack.Navigator>
    );
};

