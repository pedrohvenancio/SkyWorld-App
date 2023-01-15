import React from 'react';
import styles from '../styles/LoginInUpStyle';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, withTheme, LinearGradient, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';




function LoginInUp() {
    const nav = useNavigation();

    return (
    <View style={styles.container}>
        <View style={styles.view1}>
        </View>
        <View style={styles.view2}>
            <Text>Oi</Text>
            <Button ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }} 
                onPress={() => nav.navigate('LoginIn')}>
                Login
            </Button>
            <Button radius={'lg'} type="solid" onPress={() => nav.navigate('LoginUp')}>
                Registrar
            </Button>
        </View>
        
    </View>
    );
}

export default LoginInUp;
