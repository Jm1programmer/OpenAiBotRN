import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { propsStack } from "../screens/Stack/models";






interface AuthContextData {
    viewedOnboarding: boolean |undefined;
    signIN: () => Promise<void>
   signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)



type PropsFC = {
    children?: React.ReactNode
  };


  export const AuthProvider: React.FC<PropsFC> = ({children}  ) => {
  
    const [viewedOnboarding, setViewedOnboarding] = useState<boolean | undefined>(false)

    const checkOnboarding = async () => {
        try {
          const value = await AsyncStorage.getItem('@viewedOnboarding')
    
          if (value !== null) {
              setViewedOnboarding(true)
          }
    
        } catch (err) {
            console.log('Error @checkOnboarding:', err)
        } finally {
    
        }
      }
      useEffect(() => {
          checkOnboarding()
      }, [])

      const removeViewed = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding');
           
            return true;
        }
        catch(exception) {
            return false;
        }
    }
    const CheckOnboarding = async () => {
        try {
         await AsyncStorage.setItem('@viewedOnboarding', 'true')    
        } catch (err) {
            console.log('Error @setItem:', err)
        } 
        
      }
   

  async function signOut() : Promise<void>  {
    setViewedOnboarding(undefined) 
    removeViewed()
    checkOnboarding()
    return
  }

  async function signIN() : Promise<void>  {
    CheckOnboarding()
    checkOnboarding()
    return
  }

    return <AuthContext.Provider value={{viewedOnboarding, signOut, signIN}} >
                {children}
        </AuthContext.Provider>
    
}


export function useAuth(){
    const context = useContext(AuthContext)
    return context;
}