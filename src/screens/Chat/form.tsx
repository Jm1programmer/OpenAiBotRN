import React, {useState, useEffect} from "react";
import {Dimensions, View, StyleSheet, TextInput,  TouchableOpacity, Image , } from "react-native";
import { COLORS } from "../../colors";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm  } from "react-hook-form";
import { Api } from "../../services/openaiApi";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


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


function handleSignIn(data: Data) {
    
        const prompt = data.TextBox

    let guid = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    setPlaceHolder('Generating...')
    const getOpenAiResponse = async () => {
      
        resetField('TextBox')
        setInputGenerating(false)
        const resultado = await Api({prompt: prompt})
        const Text = resultado.choices[0].text
        
        

        const id = guid();
        
       
       
     SetMessages(
        (prev: any) => [...prev,
         {
        user_id: id_user,
    userName: 'User',
    text: prompt,
    date: '2023, 3, 15',
    avatar: 'https://i.imgur.com/RhCmcHE.png',
    messageId: id_user,
    id: id
    
    },{
       
        user_id: '9090',
    userName: nameUrl,
   text: Text,
    date: '2023, 3, 15',
    avatar: ImageUrl,
    messageId: '1000',
    id: id
    
    }, ])
   
   

    
    setPlaceHolder('Send Message')
    setInputGenerating(true)
    
    }
    
    getOpenAiResponse()
    flatlistRef.current?.scrollToEnd({animated: true})
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

                    

                    <TouchableOpacity style={styles.sendButton} onPress={(e) => {
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
        minHeight: height / 16,
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