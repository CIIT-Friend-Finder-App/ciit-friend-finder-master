import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function Login({ goTo }) {
  const [email, inputEmail] = useState('');
  const [password, inputPassword] = useState('');
  return (
    

      <View style = {styles.container}>

        <View style = {styles.header}>
          <Text style = {styles.logInHeading}>Login</Text>
          <Text style = {styles.logInSubHeading}>Welcome back!</Text>
        </View>

        {/* ====== INPUT FIELDS ====== */}
        <View style = {styles.inputFields}>
          <TextInput 
            placeholder = "Email"
            style = {styles.input}
            value = {email}
            onChangeText={inputEmail}
          />
          <TextInput 
            placeholder = "Password"
            style = {styles.input}
            value = {password}
            onChangeText={inputPassword}
            secureTextEntry
          />
          <Pressable style = {styles.logInBtn} onPress={() => goTo('swipe')} ><Text style = {styles.txtLogInBtn}>Log In</Text></Pressable>
        </View>
        
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flex: 2.3,
    padding: 10,
    justifyContent: 'center',
    marginBottom: -20,
  },
  logInHeading: {
    fontWeight: 900,
    fontSize: 30,
    textAlign: 'center'
  },
  logInSubHeading: {
    fontSize: 18,
  },
  inputFields: {
    flex: 2.8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    fontSize: 10,
    borderRadius: 30,
    width: '80%',
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
  },
  logInBtn: {
    width: '80%',
    backgroundColor: '#F82E4B',
    marginTop: 20,
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
  },
  txtLogInBtn: {
    color: 'white',
  },

});