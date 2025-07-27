import { View, ScrollView, Text, StyleSheet, Pressable, TextInput, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import DateTimePicker from "@react-native-community/datetimepicker"; 

export default function CreateProfile({ goTo }) {
    const [nickname, inputNickname] = useState('');
    const [course, inputCourse] = useState('');
    const [year, inputYear] = useState('');
    const [interests, inputInterests] = useState('');
    const [hobbies, inputHobbies] = useState('');
    const [finding, inputFinding] = useState('');
    const [bio, inputBio] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const maxDate = new Date(2010, 11, 31);

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate || date;
            toggleDatepicker();
            setDate(currentDate);


        } else {
            toggleDatepicker();
        }
    };

    return (
        <View style = {styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {styles.header}>
                    <Text style = {styles.heading}>Profile Creation</Text>
                    <Text style = {styles.subheading}>Let other users get to know you!</Text>
                </View>    
                <View style = {styles.form}>
                    <Text style = {styles.label}>Nickname</Text>
                    <TextInput 
                        placeholder = "Choose a name to hide your identity" 
                        style = {styles.input} 
                        value={nickname}
                        onChangeText={inputNickname}>
                    </TextInput>
                    <Text style = {styles.label}>Birthday</Text>
                    {showPicker && (
                        <DateTimePicker 
                        maximumDate={maxDate}
                        mode="date" 
                        display="spinner" 
                        value={date}
                        onChange={onChange}/>
                    )}

                    {!showPicker && (
                        <Pressable onPress={toggleDatepicker}>
                            <TextInput 
                                placeholder="Sat January 01 2000"
                                style = {styles.input}
                                value={date.toDateString()}
                                onChangeText={setDate}
                                placeholderTextColor={'grey'}
                                editable={false}>
                            </TextInput>
                        </Pressable>
                    )}

                    <View style = {styles.colcontainer}>
                        <View style = {styles.column}>
                            <Text style = {styles.label}>Course</Text>
                            <View style = {styles.picker}>
                                <Picker
                                    selectedValue = {course}
                                    onValueChange = {(itemValue, itemIndex) =>
                                    inputCourse(itemValue)
                                }>
                                <Picker.Item label = "BMMA - Animation" value="bmma-a" style = {styles.pickeritem} />
                                <Picker.Item label = "BMMA - Graphic Design" value="bmma-gd" style = {styles.pickeritem} />
                                <Picker.Item label = "BMMA - Video and Film Production" value="bmma-fvp" style = {styles.pickeritem} />
                                <Picker.Item label = "BS - Computer Science" value="bscs" style = {styles.pickeritem} />
                                <Picker.Item label = "BS - Entrepreneurship" value="bsentrep" style = {styles.pickeritem} />
                                <Picker.Item label = "BS - Entertainment and Multimedia Computing" value="bsemc" style = {styles.pickeritem} />
                                <Picker.Item label = "BS - Information Systems" value="bsis" style = {styles.pickeritem} />
                                </Picker>
                            </View>
                        </View>
                        <View style = {styles.column}>
                            <Text style = {styles.label}>Year</Text>
                            <View style = {styles.picker}>
                                <Picker
                                    selectedValue = {year}
                                    onValueChange = {(itemValue, itemIndex) =>
                                    inputYear(itemValue)
                                }>
                                <Picker.Item label = "First Year" value="firstyr" style = {styles.pickeritem} />
                                <Picker.Item label = "Second Year" value="secondyr" style = {styles.pickeritem} />
                                <Picker.Item label = "Third Year" value="thirdyr" style = {styles.pickeritem} />
                                <Picker.Item label = "Fourth Year" value="fourthyr" style = {styles.pickeritem} />
                                <Picker.Item label = "Irregular / Prefer not to say / Others" value="other" style = {styles.pickeritem} />
                                </Picker>
                            </View>
                        </View>
                    </View>


                    <Text style = {styles.label}>Bio (Optional)</Text>
                    <TextInput
                        placeholder= "Anything else you want people to know about you?"
                        style = {styles.input} 
                        multiline = {true}
                        value = {bio}
                        onChangeText= {inputBio}>
                    </TextInput>
                    <Text style = {styles.label}>Interests</Text>
                    <TextInput
                        placeholder= "Let others know what you're interested in!"
                        style = {styles.input} 
                        multiline = {true}
                        value = {interests}
                        onChangeText= {inputInterests}>
                    </TextInput>
                    <Text style = {styles.label}>Hobbies</Text>
                    <TextInput
                        placeholder= "Tell people about what you like to do in your free time!"
                        style = {styles.input} 
                        multiline = {true}
                        value = {hobbies}
                        onChangeText= {inputHobbies}>
                    </TextInput>
                    <Text style = {styles.label}>Looking For:</Text>
                    <View style = {styles.picker}>
                        <Picker
                            selectedValue = {finding}
                            onValueChange = {(itemValue, itemIndex) =>
                            inputFinding(itemValue)
                        }>
                        <Picker.Item label = "A study buddy!" value="studybuddy" style = {styles.pickeritem} />
                        <Picker.Item label = "A roommate!" value="roommate" style = {styles.pickeritem} />
                        <Picker.Item label = "A food trip friend!" value="foodtripfriend" style = {styles.pickeritem} />
                        <Picker.Item label = "A gaming friend!" value="gamingfriend" style = {styles.pickeritem} />
                        <Picker.Item label = "All of the above! / Multiple" value="all" style = {styles.pickeritem} />
                        </Picker>
                    </View>
                    <Text style = {styles.label}>Card Design</Text>
                </View>
                <View style = {styles.colcontainer}>
                    <View style = {styles.column}>
                        <Pressable style = {styles.button} onPress={() => goTo('login')} ><Text style = {styles.buttontext}>Back</Text></Pressable>
                    </View>
                    <View style = {styles.column}>
                        <Pressable style = {styles.button} onPress={() => goTo('profilepreview')} ><Text style = {styles.buttontext}>Finish Profile</Text></Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },

    /*for header*/

    header: {
        paddingTop: 50,

    },

    heading: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'HelveticaNeueHeavy'
    },

    subheading: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'HelveticaNeueRoman',
        fontStyle: 'italic',
        color: 'grey',
        paddingBottom: 10,
    },

    /*form*/

    form: {
        width: 320,
        backgroundColor: 'white',
        margin: 10,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    },

    label: {
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 14,
        paddingLeft: 5,
        paddingTop: 2,
    },

    input: {
        fontFamily: 'HelveticaNeueRoman',
        color: 'grey',
        fontSize: 10, 
        borderWidth: 1,
        borderColor: '#A8A8A9',
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 18,
        paddingRight: 18,
        lineHeight: 18,
    },

    picker: {
        borderWidth: 1,
        borderColor: '#A8A8A9',
        borderRadius: 15,
        margin: 10,
    },

    pickeritem: {
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 12,
    },

    colcontainer: {
        flexDirection: 'row',
        flex: 1,
    },
    column: {
        flex: 1,
    },

    button: {
        width: '90%',
        backgroundColor: '#F82E4B',
        marginTop: 20,
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttontext: {
        color: 'white',
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 13
    },
});