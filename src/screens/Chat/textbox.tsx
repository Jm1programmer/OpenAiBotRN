import { useState, useEffect, JSXElementConstructor } from "react";
import { Text,View, StyleSheet, TouchableOpacity, Alert, Image} from "react-native";
import { COLORS } from "../../colors";

import Icon from 'react-native-vector-icons/Foundation'

import moment from 'moment'



type MessagesProps = {
    user_id: string;
    userName: string;
    text: string;
    date: string;
    messageId: string,
    avatar: string;
    id: string
  
  };

export default function TextBox({userName, user_id, text, date, avatar, messageId, }: MessagesProps) {
 
   
    const [user_uid, setUser_uid] = useState<String>()
    const [deleteIcon, setdeleteIcon] = useState<boolean>(true)
    const [MessageDate, setMessageDate] = useState<Date>(new Date())
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [TabBlock, setTabBlock] = useState<boolean>(false)

 

  
    useEffect(() => {
       
      
        setImageUrl(avatar)
        
    }, [])

 
 
    
   
 

    return <>


    <View style={[styles.TextBox, { justifyContent:  user_id === messageId ? 'flex-end' : 'flex-start'}]} >
   
        <TouchableOpacity style={styles.avatar}>
        { imageUrl !== '' ?  <Image style={styles.avatarImg} source={{uri: imageUrl}} resizeMode="cover"  /> : null}
        </TouchableOpacity>
     
        <TouchableOpacity onLongPress={() => {
          setTabBlock(!TabBlock)
          

               
               
                

           
        }}   style={user_id === messageId  ? styles.SendTextBox : styles.ReceivedTextBox} >
            <Text style={[styles.userName, {color: user_id === messageId  ? COLORS.background.white : COLORS.background.black}]}>{userName}</Text>

            
            <Text style={[styles.Text, {color: user_id === messageId  ? COLORS.background.white : COLORS.background.black}]}>{text}</Text>
         

            <Text style={[styles.date, {color: user_id === messageId  ? COLORS.background.white : COLORS.background.black}]}>{`${moment(MessageDate).fromNow()}`}</Text>
            
                    
                
        </TouchableOpacity>
       

       
        

        </View>

       
        
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
        
    }
})