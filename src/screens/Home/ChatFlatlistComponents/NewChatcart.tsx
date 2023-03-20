import React,{useEffect, useRef, useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { COLORS } from "../../../colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Stack/models";

type MessagesProps = {
   text: string,
   icon: string,
   type: string,
  
  };
export default function Cart({text, icon, type}: MessagesProps) {
    const navigation = useNavigation<propsStack>()
    return <>
    <TouchableOpacity onPress={() => {
           navigation.navigate('Chat' as never, {text: text, type: type} as never,)
        }} style={styles.Cart} >
    <Icon name={icon} size={45} color={COLORS.TextBoxGray} />
    <View style={styles.Info}></View>
    <Text style={styles.Example}>EXAMPLE</Text>
    <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    Cart: {
        width: 150,
        height: 200,
        marginHorizontal: 10,
        backgroundColor: COLORS.blue,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Info: {
        marginTop: 10,
    },
   

   Text: {
     
    fontSize: 14,
    color: COLORS.TextBoxGray,
    fontWeight: '500',
    textAlign: 'center',
    
     
    },

     Example: {
        fontSize: 12,
        color: COLORS.TextBoxGray,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 2, 
        
    },
})