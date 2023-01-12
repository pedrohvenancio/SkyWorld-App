import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function LoginUp() {
    const nav = useNavigation();

    const login = () => {
        nav.reset({
            index: 0,
            routes: [{ name: 'Welcome1' }]
        })
    }

    return (
    <View >
        <Text>tchau</Text>
        <Button radius={'lg'} type="solid" onPress={() => login()}>
            Entrar
        </Button>
    </View>
    );
}

export default LoginUp;