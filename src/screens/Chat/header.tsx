import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../colors";

import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../Stack/models";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5'

type MessagesProps = {
    nameUrl: string,
    imageUrl:string,
    
  };
export default function Header({nameUrl, imageUrl} : MessagesProps) {
    const navigation = useNavigation<propsStack>()
    const [usersArray, setUsersArray] = useState()

 
             
                
              
    return <>

    <View style={styles.Header}>
      
    
    <TouchableOpacity style={styles.ContactBox} onPress={() => {
        
    }}>
        <View style={styles.profilePictureView}>
        <Image style={styles.profilePicture} source={{uri: imageUrl}} resizeMode="cover" />
        </View>
        <View style={styles.info} >
            <Text style={styles.name}>{nameUrl}</Text>
            <Text style={styles.InfoText}>･Online</Text>
        </View>
        </TouchableOpacity>

      

    

    </View>


    <View style={{   borderColor: COLORS.TextBoxGray,
          borderWidth: 1,
       borderRadius: 5,}}/>
       
    </>
}

const styles = StyleSheet.create({
        Header: {
            width: '100%',
            height: 90,
           
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       padding: 10,
        },
    ContactBox: {
    
        flexDirection: 'row',
        alignItems: 'center'
    },

    profilePictureView: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 60,
       
    },
    info: {
        paddingLeft: 10,
    },
    name: {
        fontSize: 17,
        fontWeight: '500'
  
    },
    InfoText: {
        fontSize: 15,
        color: COLORS.green,
        fontWeight: '900'
       
    }
    
})