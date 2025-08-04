import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Chat({ goTo }) {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Pressable onPress={() => goTo('messages')}>
                    <Ionicons name="arrow-back" size={24} color='#F82E4B'/>
                    <Text style = {styles.heading}>Lia, 20</Text>
                </Pressable>
                <Text style = {styles.timestamptop}>Today, 2:53 PM</Text>
            </View>
            <View style = {styles.chatbubbleR}>
                <Text style = {styles.chatTextR}>Hi, nice to meet you!</Text>
            </View>
            <Text style = {styles.timestampR}>2:53 PM   <FontAwesome6 name="check-double" size={12} color='#F82E4B'/></Text>
            <View style = {styles.chatbubbleL}>
                <Text style = {styles.chatTextL}>Hi hello ^^</Text>
            </View>
            <Text style = {styles.timestampL}>2:54 PM</Text> 
            <View style = {styles.messageinput}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        padding: 20,
        alignItems: 'center'
    },
    header: {
        marginTop: 20,
        height: 80,
        padding: 20,
        width: '100%'
    },
    heading: {
        fontFamily: 'HelveticaNeueHeavy',
        fontSize: 20,
        alignSelf: 'center',
    },

    timestamptop: {
        color: 'grey',
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 10,
    },

    chatbubbleR: {
        width: 140,
        height: 45,
        backgroundColor: '#F82E4B',
        position: 'absolute',
        right: 10,
        borderRadius: 20,
        padding: 5,
        paddingBottom:10,
        marginTop: 170,
    },

    chatTextR: {
        color: 'white',
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
    },

    timestampR: {
        color: 'grey',
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 10,
        alignSelf: 'right',
        textAlign: 'right',
        marginTop: 100,
        paddingRight: 5,
    },

    chatbubbleL: {
        width: 100,
        height: 45,
        backgroundColor: '#e2e2e2ff',
        alignSelf: 'left',
        borderRadius: 20,
        padding: 5,
        paddingleft: 0,
        marginTop: 30,
    },

    chatTextL: {
        color: 'black',
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
    },

    timestampL: {
        color: 'grey',
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 10,
        alignSelf: 'left',
        textAlign: 'left',
        paddingTop: 10,
        paddingLeft: 10,
    },

    messageinput: {
        width: 340,
        height: 50,
        position: 'absolute',
        bottom: 10,
        backgroundColor: '#f1f1f1ff',
        borderRadius: 25,
        borderColor: 'transparent',
    },


})