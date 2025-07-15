import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { createNativeWrapper } from 'react-native-gesture-handler';

export default function ProfilePreview({ goTo }) {
    return (
        <View style = {styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {styles.header}>
                    <Text style = {styles.heading}>Profile Preview</Text>
                    <Text style = {styles.subheading}>Let other users get to know you!</Text>
                    <View style = {styles.card}>
                        
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

    /*preview*/

    card: {
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
    }
    
});