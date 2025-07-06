import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Button } from 'react-native';


export default function Register({ goTo }) {
    const [ciitEmail, inputCiitEmail] = useState('');
    const [fullName, inputFullName] = useState('');
    const [nickname, inputNickname] = useState('');
    const [pronouns, inputPronouns] = useState('');
    return (
        <View>
            { /* HEADER */}
            <View>
                <Text>Sign Up</Text>
                <Text>Find and connect with other CIITzens today!</Text>
            </View>
            { /* SIGN UP FIELDS */}
            <View>
                <Text>CIIT Email Address</Text>
                <TextInput
                    placeholder = "@ciit.edu.ph"
                    //style = {}
                    value = {ciitEmail}
                    onChangeText={inputCiitEmail}
                />
                <Text>Full Name</Text>
                <TextInput
                    placeholder = "First Name, Surname"
                    //style = {}
                    value = {fullName}
                    onChangeText={inputFullName}
                />
                <Text>Preferred Name</Text>
                <TextInput
                    placeholder = "Name or nickname"
                    //style = {}
                    value = {nickname}
                    onChangeText={inputNickname}
                />
                <Text>Pronouns</Text>
                <TextInput
                    placeholder = "She/Her, He/Him, etc."
                    //style = {}
                    value = {pronouns}
                    onChangeText={inputPronouns}
                />
                <Text>Preferred Name</Text>
                <TextInput
                    placeholder = "Name or nickname"
                    //style = {}
                    value = {nickname}
                    onChangeText={inputNickname}
                />
                <Text>Preferred Name</Text>
                <TextInput
                    placeholder = "Name or nickname"
                    //style = {}
                    value = {nickname}
                    onChangeText={inputNickname}
                />
                

            </View>
            <Button onPress={() => goTo('login')} title ="Log In"/>
        </View>

    );

}