import React from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.home} >
            <Text style={styles.title}>Ko-Re-Wa Ho-Mu Pay-Gi</Text>
            <Button onPress={() => navigation.navigate('Notification')} title='Next' ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
    }
})
export default Home 