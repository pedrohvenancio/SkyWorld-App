import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function Welcome1() {
    const nav = useNavigation();


    return (
    <View >
        <Text>tchau</Text>
        <Button radius={'lg'} type="solid" onPress={() => nav.navigate('Welcome2')}>
            Proximo
        </Button>
        
        
    </View>
    );
}

export default Welcome1;
