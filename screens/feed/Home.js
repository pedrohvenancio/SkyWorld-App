import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Feed from './Feed';
import Profile from './Profile';
import Community from './Community';
import Followers from './Followers';
import Gallery from './Gallery';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeNavigator = () => {

    return (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    )
}

const ProfileNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Followers" component={Followers} />
    </Stack.Navigator>
}

function Home() {

    return (
        <NavigationContainer independent={true}>
            <HomeNavigator />
            <ProfileNavigator />
        </NavigationContainer>
    );
}

export default Home;
