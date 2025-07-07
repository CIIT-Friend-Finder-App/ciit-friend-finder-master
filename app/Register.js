import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';



export default function Register({ goTo }) {
    const [ciitEmail, inputCiitEmail] = useState('');
    const [fullName, inputFullName] = useState('');
    const [nickname, inputNickname] = useState('');
    const [pronouns, inputPronouns] = useState('');
    const [gender, inputGender] = useState();
    const [password, inputPassword] = useState();
    const [confirmPassword, inputConfirmPassword] = useState();
    const [tnc, inputTnc] = useState(false);
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
                <Text>Gender</Text>
                <Picker
                    //style = {}
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) =>
                        inputGender(itemValue)
                    }>
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Nonbinary" value="nonbinary" />
                    <Picker.Item label="Prefer not to say" value="none" />
                </Picker>
                <Text>Password</Text>
                <TextInput
                    placeholder = "***"
                    //style = {}
                    value = {password}
                    onChangeText={inputPassword}
                    secureTextEntry
                />
                <Text>Confirm Password</Text>
                <TextInput
                    placeholder = "***"
                    //style = {}
                    value = {confirmPassword}
                    onChangeText={inputConfirmPassword}
                    secureTextEntry
                />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox
                        status={tnc ? 'checked' : 'unchecked'}
                        onPress={() => {
                        inputTnc(!tnc);
                        }}
                    />
                    <Text>I agree to the <Text style ={{color: '#F83758', textDecorationLine: 'underline'}}>Terms & Conditions</Text> and the <Text style ={{color: '#F83758', textDecorationLine: 'underline'}}>Privacy Policy</Text>.</Text>
                </View>




                

            </View>
            <Button onPress={() => goTo('login')} title ="Log In"/>
        </View>

    );

}