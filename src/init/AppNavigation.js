import React, { useState } from 'react';
import { Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//ROUTES
import Authentication from "../routes/Authentication"
import RouteConstants from '../constants/RouteConstants';

const Stack = createStackNavigator();

export default function AppNavigation({ isLogin, user }) {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name={RouteConstants.AUTH}
                    children={() => (
                        <Authentication
                            isLogin={isLogin}
                            user={user}
                        />
                    )}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )

}
