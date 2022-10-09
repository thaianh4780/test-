import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Alert } from 'react-native';
import InputBox from '../components/Input';
import Button from '../components/Button';
import { Fontisto } from "@expo/vector-icons";
 
const Login =(navigation) => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Fontisto style={styles.logo} name="coffeescript" />
      </View>
      <View style={[styles.inputSettings, styles.shadowProp]} >
        <View style={styles.textPacket}>
          <Text style={styles.textInput}>Log In</Text>
        </View>
        <View>
          <InputBox text="email">
          </InputBox>
          <InputBox text="password">
          </InputBox>
        </View>
        <View style={styles.sbtnLog}>
          <Button
            title="Log in"
            color="#841584"
            onClick={Alert("login")}
          >
          </Button>
        </View>
      </View>
      <View style={styles.link}>
        <Text>Dont Have a Account ?</Text>
        <Text style={styles.normalink} > Sign up</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  inputSettings: {
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 35,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderColor: "#606068",
    marginHorizontal: 10,
    fontFamily: 'Helvetica Neue',
  },
  shadowProp: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textInput: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 30,
    color: '#a85b3c',
  },
  textPacket: {
    marginTop: -10,
    paddingBottom: 20,
    marginBottom: 30,
    borderBottomWidth: 4,
    borderBottomColor: '#a85b3c'
  },
  sbtnLog: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
    fontSize: 90,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#a85b3c',
  },
  link: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'inline'
  },
  normalink: {
    color: '#a85b3c',
    fontFamily: 'Helvetica Neue',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop:-6,
  }
});

export default Login