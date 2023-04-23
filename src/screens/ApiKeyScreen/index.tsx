import { useNavigation } from "@react-navigation/native";
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, LayoutAnimation, KeyboardAvoidingView, Platform } from "react-native";
import { Bots } from "../../BotConfigs";
import { COLORS } from "../../colors";
import { propsStack } from "../Stack/models";
import KeyForm from "./form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function ApiKeyScreen() {

    const ImageKey = require('../../../assets/ApiKeyImage.png')
  
  

 

    const navigation = useNavigation<propsStack>()
    return <>

<KeyboardAvoidingView style={styles.Screen}
behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    
     
        <Image source={ImageKey} resizeMode={'contain'} style={{width: 320, height: 400, }}/> 
       <Text style={styles.Title}>{`Generate a API Key!` }</Text>
       <Text style={styles.Text}>{'To start chatting with me, you`ll need to generate an API key from OpenAI. '}</Text>

        <KeyForm/>

       </KeyboardAvoidingView>

   
      
       
    </>
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: COLORS.background.white, 
        alignItems: 'center',
        justifyContent: 'center',
      padding: 30,
    },
    Title: {
        fontSize: 18,
        color: COLORS.background.black,
        fontWeight: '400',
       textAlign: 'center',
     
     
       
    },
    Text: {
         fontSize: 12,
        color: COLORS.gray,
        fontWeight: '500',
     
       alignSelf: 'center',
        width: '90%',
        marginTop: 10
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: COLORS.blue,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: COLORS.background.white,
        fontWeight: '400',
    }
})