import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function Welcome2() {
    const nav = useNavigation();

    const entrar = () => {
        nav.reset({
            index: 0,
            routes: [{ name: 'Home' }]
        });
    }
    return (
    <View >
        <Text>tchau</Text>
        <Button radius={'lg'} type="solid" onPress={() => entrar()}>
            Proximo
        </Button>
        
    </View>
    );
}

export default Welcome2;
