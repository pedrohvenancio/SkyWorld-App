import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



function Profile() {
    const nav = useNavigation();

   
    return (
    
        <View>
        <Button radius={'lg'} type="solid" onPress={() => nav.navigate('Followers')}>
            Followers
        </Button>
        <Button radius={'lg'} type="solid" onPress={() => nav.navigate('Gallery')}>
            Gallery
        </Button>
        </View>
    
    );
}

export default Profile;
