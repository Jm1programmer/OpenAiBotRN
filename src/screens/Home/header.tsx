import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../colors";

import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../Stack/models";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5'
import AIcon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../contexts/Auth";

type MessagesProps = {
    nameUrl: string,
    imageUrl:string,

    
  };
export default function Header({nameUrl, imageUrl, } : MessagesProps) {

    const {signOut} = useAuth()

    const navigation = useNavigation<propsStack>()
    const [usersArray, setUsersArray] = useState()
    const [perfilOptions, setPerfilOptions] = useState<boolean>(false)
     
    const changeApi = async () => {
       signOut()
    }
             
                
              
    return <>

    <View style={styles.Header}>
      
    
    <TouchableOpacity style={styles.ContactBox} onPress={() => {
        setPerfilOptions(!perfilOptions)
    }}>
        <View style={styles.profilePictureView}>
        <Image style={styles.profilePicture} source={{uri: imageUrl}} resizeMode="cover" />
        </View>
        <View style={styles.info} >
            <Text style={styles.name}>{nameUrl}</Text>
            <View style={styles.InfoTextView}>
            <Text style={styles.InfoText}>made with</Text>
            <Text style={[styles.InfoText, styles.InfoTextBold]}>OpenAi</Text>
            </View>
            
        </View>
        </TouchableOpacity>

      { perfilOptions?  <View style={styles.PerfilOptionsTab}>
        <TouchableOpacity style={styles.PerfilOptionTabButton} onPress={() => {
          changeApi()
        }}>
        <AIcon  name={'logout'} size={20} color={COLORS.background.black} />
        <Text style={styles.PerfilOptionTabText}>Change API Key</Text>
        </TouchableOpacity>
     </View> : null }

    

    </View>



       
    </>
}

const styles = StyleSheet.create({
        Header: {
            width: '100%',
            height: 90,
           
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'flex-start',
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
        fontWeight: '500',
        fontFamily: 'Montserrat-SemiBold', 
        color:  COLORS.background.black
  
    },
    InfoTextView: {
        flexDirection: 'row',
        
    },
    InfoText: {
        fontSize: 15,
        color: COLORS.gray,
        fontWeight: '400',
      
       
    },
    InfoTextBold: {
        fontWeight: '300',
        marginHorizontal: 2,
        color: COLORS.background.black,
        fontSize: 16,
    },

    PerfilOptionsTab: {
      minWidth: 100,
        minheight: 1,
        backgroundColor: COLORS.background.white,
        position: 'absolute',
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-end',
        borderColor: COLORS.TextBoxGray,
        borderWidth: 1,
        zIndex: 2, // works on ios
      
    },

    PerfilOptionTabButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    PerfilOptionTabText: {
        fontSize: 15,
     
         marginHorizontal: 10,
    }
    
})