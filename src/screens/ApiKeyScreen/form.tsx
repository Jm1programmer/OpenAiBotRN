import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm  } from "react-hook-form";
import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import { COLORS } from '../../colors';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../Stack/models';
import { Api } from '../../services/openaiApi';
import { useAuth } from '../../contexts/Auth';

const schema = yup.object({
   
   ApiKey: yup.string().required(),
 })

 type Data = { 
    ApiKey: string ; 
  }
  type ParamsType = {
    SetButtonState: Function
  }
 

  export default function KeyForm() {
    const { control, handleSubmit, resetField,  formState: {errors}} = useForm<Data>({
        resolver: yupResolver(schema),   
})

const [HideText, setHideText] = useState<boolean>(true)
const [buttonState, setButtonState] = useState<boolean>(true)
const [ApiKeyState, setApiKeyState] = useState<boolean | undefined>(undefined) 
const navigation = useNavigation<propsStack>()
const {signIN} = useAuth()

async function handleSignIn(data: Data) {

  //AsyncStorage.setItem('@ApiKey', data.ApiKey)
  //navigation.navigate('Home')
  const resultado = await Api({prompt: 'Hi', key: data.ApiKey})
  const Text = resultado.choices[0].text as string

  setApiKeyState(false)
  if (resultado) { 
    setApiKeyState(true)
  
    AsyncStorage.setItem('@ApiKey', data.ApiKey)
    signIN()
 
   } else {
    setApiKeyState(false)
   }
  

  
  
}



return <>
    
<View style={styles.form}>

    <Controller control={control} name="ApiKey"
        render={({ field: { onChange, onBlur, value}}) => (
            
            <View  style={[styles.Input, {
              borderColor: errors.ApiKey? COLORS.red : COLORS.TextBoxGray
                
            }]}>

      

            <TextInput style={styles.InputText}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={'Api Key...'}
                placeholderTextColor={COLORS.gray} 
                selectionColor={COLORS.gray}
                secureTextEntry={HideText}
          
             
                
            />

            

          <TouchableOpacity onPress={() => {
            setHideText(!HideText)
          }}>
           
          <Icon name={ HideText? "eye-with-line" : "eye"} size={25} color={COLORS.TextBoxGray} />
          </TouchableOpacity>
     

        </View>

        
        
        )}/> 
        {errors.ApiKey && <Text style={styles.TextError}>{errors.ApiKey?.message}</Text>   } 
        

<View style={{position: 'absolute', margin: 10, backgroundColor: COLORS.background.white}}>
            <Text style={[styles.InputText, { fontSize: 12, width: '100%', }]}>Paste your API key here</Text>
        </View>

</View>

{ ApiKeyState == undefined? null :
//ApiKeyState? `Its all correct` : `Your API key is invalid \n try again`
<View style={[styles.box, {backgroundColor: ApiKeyState? COLORS.green : COLORS.red}]}>
            <Text style={{textAlign: 'center', color: COLORS.background.white, fontSize: 15, }}>{ApiKeyState == null? `Your API key is invalid \n try again` :`Its all correct`}</Text>
</View>

  }


  <TouchableOpacity style={[styles.button, {opacity: buttonState? 1: 0.5,}]} disabled={!buttonState} onPress={(e) => {
       
                        const submit = () => {
                         
                            {;handleSubmit(handleSignIn)(e);}
                        }

                     
                        
                        submit()
                        
                    } }>


    <Text style={styles.buttonText}>Start</Text>
</TouchableOpacity>

      

</>
  }

const height = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
      
       marginVertical: 10
  
    },
    Input: {
        width: '95%',
       
        flexDirection: 'row',
        minHeight: 50,
        maxHeight: height / 14,
       
        marginVertical: 15,
        alignItems: 'center',
       justifyContent: 'space-between',
     
       borderColor: COLORS.TextBoxGray,
    borderWidth: 2,
    outlineColor: COLORS.TextBoxGray,
    outlineStyle: COLORS.TextBoxGray,
    outlineWidth: 4,
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
    TextError: {
      fontSize: 12,
      color: COLORS.red,
      marginTop: -5,
        textAlign: 'center'
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
  },

  box: {
      width: '100%',
      minHeight: 40,
      backgroundColor: COLORS.green,
      marginBottom: 10,
      borderRadius: 5,
      justifyContent: 'center'
  }
  
})