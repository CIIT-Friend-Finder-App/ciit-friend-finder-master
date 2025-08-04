import { View, Text, StyleSheet, Pressable, Modal, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Messages({ goTo }) {
    const [visible, changeVisibility] = useState(false);
    const [search, inputSearch] = useState('');

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {{fontFamily: 'HelveticaNeueHeavy', fontSize: 30}}>Messages</Text>
            </View>
            <TextInput 
                placeholder = "Search messages..." 
                style = {styles.input} 
                value={search}
                onChangeText={inputSearch}>
            </TextInput>
            <ScrollView style = {styles.scroll} showsVerticalScrollIndicator={false}>
                <Pressable style = {styles.messageCon} onPress={() => goTo('chat')}>
                    <View style = {styles.circleCol}><FontAwesome name="circle" size={58} color="aliceblue" /></View>
                    <View style = {styles.messCol}>
                        <Text style = {styles.name}>Lia, 20</Text>
                        <Text style = {styles.message}>Hey, what's up!</Text>
                    </View>
                    <View style = {styles.timeCol}>
                        <Text style = {styles.time}>6:35 PM</Text>
                    </View>
                </Pressable>
                <Pressable style = {styles.messageCon}>
                    <View style = {styles.circleCol}><FontAwesome name="circle" size={58} color="lavender" /></View>
                    <View style = {styles.messCol}>
                        <Text style = {styles.name}>Jojo, 20</Text>
                        <Text style = {styles.message}>You: Yup! See you there!</Text>
                    </View>
                    <View style = {styles.timeCol}>
                        <Text style = {styles.time}>3:29 PM</Text>
                    </View>
                </Pressable>
                   <Pressable style = {styles.messageCon}>
                    <View style = {styles.circleCol}><FontAwesome name="circle" size={58} color="lightyellow" /></View>
                    <View style = {styles.messCol}>
                        <Text style = {styles.name}>Ji, 19</Text>
                        <Text style = {styles.message}>Hiiii</Text>
                    </View>
                    <View style = {styles.timeCol}>
                        <Text style = {styles.time}>7:00 AM</Text>
                    </View>
                </Pressable>
                <Pressable style = {styles.messageCon}>
                    <View style = {styles.circleCol}><FontAwesome name="circle" size={58} color="mediumorchid" /></View>
                    <View style = {styles.messCol}>
                        <Text style = {styles.name}>Ty, 23</Text>
                        <Text style = {styles.message}>Hello!</Text>
                    </View>
                    <View style = {styles.timeCol}>
                        <Text style = {styles.time}>4:17 PM</Text>
                    </View>
                </Pressable>
                <Pressable style = {styles.messageCon}>
                    <View style = {styles.circleCol}><FontAwesome name="circle" size={58} color="midnightblue" /></View>
                    <View style = {styles.messCol}>
                        <Text style = {styles.name}>Day, 21</Text>
                        <Text style = {styles.message}>You: I've heard of them before!</Text>
                    </View>
                    <View style = {styles.timeCol}>
                        <Text style = {styles.time}>2:00 AM</Text>
                    </View>
                </Pressable>
                <Pressable style = {styles.messageCon}>
                    <View style = {styles.circleCol}><FontAwesome name="circle" size={58} color="palevioletred" /></View>
                    <View style = {styles.messCol}>
                        <Text style = {styles.name}>Max, 22</Text>
                        <Text style = {styles.message}>Yup!</Text>
                    </View>
                    <View style = {styles.timeCol}>
                        <Text style = {styles.time}>12:16 PM</Text>
                    </View>
                </Pressable>
                <Pressable style = {styles.messageCon}>
                    <View style = {styles.circleCol}><FontAwesome name="circle" size={58} color="rebeccapurple" /></View>
                    <View style = {styles.messCol}>
                        <Text style = {styles.name}>Becca, 20</Text>
                        <Text style = {styles.message}>You: I'm g</Text>
                    </View>
                    <View style = {styles.timeCol}>
                        <Text style = {styles.time}>2:42 PM</Text>
                    </View>
                </Pressable>
                <Pressable style = {styles.messageCon}>
                    <View style = {styles.circleCol}><FontAwesome name="circle" size={58} color="plum" /></View>
                    <View style = {styles.messCol}>
                        <Text style = {styles.name}>P, 18</Text>
                        <Text style = {styles.message}>No way!</Text>
                    </View>
                    <View style = {styles.timeCol}>
                        <Text style = {styles.time}>9:00 PM</Text>
                    </View>
                </Pressable>
            </ScrollView>
            <View style = {styles.navbar}>
                <Pressable onPress={() => goTo('landing')} ><MaterialCommunityIcons name="cards" size={35} color="#FCA5B4" /></Pressable>
            <View style = {styles.selectedNav}>
                <Pressable onPress={() => goTo('messages')}>
                    <FontAwesome name="wechat" size={30} color="white" />
                </Pressable>
                <Text style = {{color: 'white'}}>Messages</Text>
            </View>
                <Pressable onPress={() => goTo('notifications')} ><Ionicons name="notifications" size={30} color="#FCA5B4" /></Pressable>
                <Pressable onPress = {() => goTo('account')}><MaterialCommunityIcons name="account" size={30} color="#FCA5B4" /></Pressable>
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
        height: 80,
        padding: 20,
        width: '100%'
    },
    navbar: {
        position: 'absolute',
        backgroundColor: '#F83758',
        width: '115%',
        bottom: 0,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'row',
       
        
    },
    selectedNav: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
     
   
    },
    input: {
        height: 50,
        width: 340,
        fontFamily: 'HelveticaNeueRoman',
        color: '#bfbfbfff',
        fontSize: 12, 
        borderWidth: 1,
        backgroundColor: '#edededff',
        borderColor: '#edededff',
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 18,
        paddingRight: 18,
        lineHeight: 20,
    },

    scroll: {
        width: 340,
        marginTop: 20,
    },

    messageCon: {
        width: 340,
        borderBottomColor: 'grey',
        borderBottomWidth: .5,
        flexDirection: 'row',
        flex: 1,
        height: 70,
        marginTop: 20,
    },

    circleCol: {
        width: 70,
        height: 70,
        marginLeft: 10,
    },

    messCol: {
        width: 210,
        height: 70,
    },

    timeCol: {
        width: 60,
        height: 70,
    },

    name: {
        fontFamily: 'HelveticaNeueHeavy',
        fontSize: 18,
        marginBottom: 5,
    },

    message: {
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 12,
        color: 'grey',
    },

    time: {
        fontFamily: 'HelveticaNeueRoman',
        fontSize: 12,
        color: 'grey',
    },
})