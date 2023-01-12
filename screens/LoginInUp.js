import React from 'react';
import styles from '../styles/LoginInUpStyle';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';




function LoginInUp() {
    const nav = useNavigation();

    return (
    <View style={styles.container}>
        <Text>Oi</Text>
        <Button radius={'lg'} type="solid" onPress={() => nav.navigate('LoginIn')}>
            Login
        </Button>
        <Button radius={'lg'} type="solid" onPress={() => nav.navigate('LoginUp')}>
            registrar
        </Button>
    </View>
    );
}

export default LoginInUp;
