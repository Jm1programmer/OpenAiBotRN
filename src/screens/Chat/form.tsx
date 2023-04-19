import React, {useState, useEffect} from "react";
import {Dimensions, View, StyleSheet, TextInput,  TouchableOpacity, Image , } from "react-native";
import { COLORS } from "../../colors";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm  } from "react-hook-form";
import { Api } from "../../services/openaiApi";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiKeyGet from "../../services/getApiKey";
import IdGenerator from "./idGenerator";


const schema = yup.object({
   
    TextBox: yup.string().required(),
 })

 type Data = { 
    TextBox: string ; 
  }

  type MessagesProps = {
    flatlistRef: any,
    nameUrl: string,
    idUrl: string,
    Messages: Array<Object>,
    id_user: string,
    SetMessages: any,
    ImageUrl: string,
  };

 

export default function Form({flatlistRef, nameUrl, idUrl, Messages, id_user, SetMessages, ImageUrl}: MessagesProps) {
    const [placeholder, setPlaceHolder] = useState('Send Message')
    const [InputGenerating, setInputGenerating] = useState<boolean>(true)
    



    const { control, handleSubmit, resetField,  formState: {errors}} = useForm<Data>({
        resolver: yupResolver(schema),
        
        
})


async function handleSignIn(data: Data) {
    
        const prompt = data.TextBox
        
       
        const id = IdGenerator();

    
        
        SetMessages(
            (prev: any) => [...prev,
             {
            user_id: id_user,
        userName: 'User',
        text: prompt.trim(),
        date: '2023, 3, 15',
        avatar: 'https://i.imgur.com/RhCmcHE.png',
        messageId: id_user,
        id: id,
        generate: false,
             },

        {
       
            user_id: '9090',
        userName: nameUrl,
            text: `genetating... ${prompt + id}`,
        date: '2023, 3, 15',
        avatar: ImageUrl,
        messageId: '1000',
        id: id,
        generate: true,
        
        },
        
        
        ])

   
    setPlaceHolder('Generating...')
    const getOpenAiResponse = async () => {

       
        resetField('TextBox')
        setInputGenerating(false)

        const KeyApi = await ApiKeyGet()

        
        const resultado = await Api({prompt: prompt, key: KeyApi })
        const Text = resultado.choices[0].text as string
      
        const HistoryData = {
            prompt: prompt.trim(),
            response: Text,
            time: new Date()
            
        }
        const HistoryValue = JSON.stringify(HistoryData)
  
        await AsyncStorage.setItem(id, HistoryValue)

      
        SetMessages((prev: any) => (prev.slice(0, -1))); 
     SetMessages(
        (prev: any) => [...prev,
     {
       
        user_id: '9090',
    userName: nameUrl,
   text: Text.trimStart(), 
    date: '2023, 3, 15',
    avatar: ImageUrl,
    messageId: '1000',
    id: id,
    generate: false,
    
    }, ])
   
       
 
    setPlaceHolder('Send Message')
    setInputGenerating(true)
    
    }


    
    getOpenAiResponse()
  
}
     
  

        return <>
      
        <View style={styles.form}>
            <Controller control={control} name="TextBox"
                render={({ field: { onChange, onBlur, value}}) => (
                    
                    <View  style={[styles.Input, {
                    
                        
                    }]}>

                

                    <TextInput style={styles.InputText}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor={COLORS.gray} 
                        selectionColor={COLORS.gray}
                        multiline={true}
                        numberOfLines={1}
                        editable={InputGenerating}
                     
                        
                    />

                    

                    <TouchableOpacity
                    disabled={!InputGenerating}
                     style={[styles.sendButton, { opacity: InputGenerating == true? 1: 0.2}]} onPress={(e) => {
                        const submit = () => {
                            {;handleSubmit(handleSignIn)(e);}
                        }

                     
                        
                        submit()
                        
                    } } >

                    <Icon name={'send'} size={25} color={COLORS.TextBoxGray} />

                    </TouchableOpacity>
                 

                </View>
                
                )}/> 


        </View>
      
       
        </>
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
      
        marginBottom: 50,
  
    },
    Input: {
        width: '95%',
       
        flexDirection: 'row',
        minHeight: 50,
        maxHeight: height / 14,
       
        marginVertical: 15,
        alignItems: 'center',
       justifyContent: 'space-between',
     
       backgroundColor: COLORS.TextBoxGray,
       borderRadius: 60,
      paddingHorizontal: 10,
        overflow: 'hidden'
        
      
       
        
    },

    InputText: {
       
        fontSize: 16,
        color: COLORS.gray,
       width: '88%',
       paddingHorizontal: 10,

    
     
    },

    sendButton: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
    },

  
})