import { useState, useEffect, JSXElementConstructor } from "react";
import { Text,View, StyleSheet, TouchableOpacity, Alert, Image} from "react-native";
import { COLORS } from "../../colors";

import Icon from 'react-native-vector-icons/Ionicons'
import Clipboard from '@react-native-clipboard/clipboard';
import moment from 'moment'



type MessagesProps = {
    user_id: string;
    userName: string;
    text: string;
    date: string;
    messageId: string,
    avatar: string;
    id: string,
    generating: boolean
  
  };

export default function TextBox({userName, user_id, text, date, avatar, messageId, generating }: MessagesProps) {
 
   
   
    const [MessageDate, setMessageDate] = useState<Date>(new Date())
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [TabBlock, setTabBlock] = useState<boolean>(false)
    const [copied, setCopied] = useState<boolean>(false)
    const [Generating, setGenerating] = useState<boolean>(generating)

 

  
    useEffect(() => {
       
      
        setImageUrl(avatar)
        
    }, [])

 
 
    
    const copyToClipboard = () => {
        Clipboard.setString(text);
        setCopied(true)
      };
 //  <Image source={{uri: 'https://thumbs.gfycat.com/GrippingReflectingBasenji-max-1mb.gif'}} style={{height: 30}} />

    return <>



    <View style={[styles.TextBox, { justifyContent:  user_id === messageId ? 'flex-end' : 'flex-start',}]} >

   
   
        <TouchableOpacity style={styles.avatar}>
        { imageUrl !== '' ?  <Image style={styles.avatarImg} source={{uri: imageUrl}} resizeMode="cover"  /> : null}
        </TouchableOpacity>
     
        <TouchableOpacity onLongPress={() => {
          setTabBlock(!TabBlock)
          

               
               
                

           
        }}  
        
        style={user_id === messageId  ? styles.SendTextBox : styles.ReceivedTextBox} >
            { Generating == false? <>
                      <Text style={[styles.userName, {color: user_id === messageId  ? COLORS.background.white : COLORS.background.black}]}>{userName}</Text>

            
                      <Text style={[styles.Text, {color: user_id === messageId  ? COLORS.background.white : COLORS.background.black}]}>{text}</Text>
                      
                   
          
                      <Text style={[styles.date, {color: user_id === messageId  ? COLORS.background.white : COLORS.background.black}]}>{`${moment(MessageDate).fromNow()}`}</Text>
                      </> : <>
                      <View>
                      <Image source={{uri: 'https://thumbs.gfycat.com/GrippingReflectingBasenji-max-1mb.gif'}} style={{height: 40, width: 90 }} />
                      </View>
                      </>
            }
          
            
                    
                
        </TouchableOpacity>
       

       
        

        </View>

       { Generating == false? <View>

       {user_id !== messageId? <TouchableOpacity onPress={copyToClipboard} style={styles.CopyView}>
    <Icon name={'copy'} size={18} color={COLORS.blue} />
        { copied == true? <Text style={styles.CopiedText}>Copied!</Text>  : <View />}
    </TouchableOpacity> : <View /> }
    </View> : <View /> }
        
    </>
}




const styles = StyleSheet.create({
    TextBox: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'flex-start',
    
    },
    ReceivedTextBox: {
        marginHorizontal: 10,
        marginVertical: 5,
        minWidth: 110 ,
        maxWidth: 330,
     
        minHeight: 50,
       backgroundColor: COLORS.TextBoxGray,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-start',
        
    },

    SendTextBox: {
        marginHorizontal: 10,
        marginVertical: 5,
        minWidth: 110 ,
        maxWidth: 330,
     
        minHeight: 50,
       backgroundColor: COLORS.blue,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-end',
        color: COLORS.background.white
    },
    Text: {
   
        fontSize: 15,
        color: COLORS.background.black,
       
        
    },
    userName: {
      
        fontSize: 12,
        color: COLORS.background.black,
    },
    date: {
        alignSelf: 'flex-end',
      
        fontSize: 12,
        color: COLORS.background.black,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 100,
      
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatarImg: {
        width: 30,
        height: 30,
    },
    tabBlock: {
        width: 90,
        height: 30,
        backgroundColor: COLORS.background.white,
        marginHorizontal: 15,
        
        borderRadius: 5,
        alignSelf: 'flex-end',
        borderColor: COLORS.TextBoxGray,
        borderWidth: 1,
       zIndex: -1,
        
    },

    CopyView: {
        marginHorizontal: 10,
        marginVertical: 5,
        minWidth: 20 ,
     
     
        minHeight: 20,
       backgroundColor: COLORS.TextBoxGray,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    
    },
    CopiedText: {
        fontSize: 13,
        color: COLORS.background.black,
        marginHorizontal: 5
    }
})