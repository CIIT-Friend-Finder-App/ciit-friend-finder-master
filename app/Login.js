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
          <Pressable style = {styles.logInBtn} onPress={() => goTo('createprofile')} ><Text style = {styles.txtLogInBtn}>Log In</Text></Pressable>
          <Pressable style = {styles.registerBtn} onPress={() => goTo('register')} ><Text style = {styles.txtRegisterBtn}>Create an account</Text></Pressable>
        
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
    backgroundColor: 'white'
  },
  header: {
    flex: 2.3,
    padding: 10,
    justifyContent: 'center',
    marginBottom: -20,
  },
  logInHeading: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'HelveticaNeueHeavy',
    marginBottom: -5
  },
  logInSubHeading: {
    fontSize: 15,
    fontFamily: 'HelveticaNeueRoman'
  },
  inputFields: {
    flex: 2.8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    
  },

  input: {
    borderWidth: 1,
    borderColor: '#A8A8A9',
    padding: 12,
    paddingLeft: 18,
    fontSize: 10,
    borderRadius: 30,
    width: '80%',
    backgroundColor: '#F3F3F3',
    marginBottom: 10,
    fontFamily: 'HelveticaNeueRoman',
    fontSize: 13
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
    fontFamily: 'HelveticaNeueRoman',
    fontSize: 13
  },
  registerBtn: {
    backgroundColor: 'white',
    width: '50%',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  txtRegisterBtn: {
    fontFamily: 'HelveticaNeueRoman',
    fontSize: 13,
    color: '#263238',
    textDecorationLine: 'underline',
  }
});