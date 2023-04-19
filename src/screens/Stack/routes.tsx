import React, {useState, useEffect, useContext} from "react";

import {NavigationContainer,} from '@react-navigation/native';
import { AuthStack, AppStack } from "./Stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext, useAuth } from "../../contexts/Auth";

export default  function Routes() {
  const {viewedOnboarding} = useAuth()
  console.log(viewedOnboarding)
  const [ViewedOnboarding, setViewedOnboarding] = useState<boolean>(false)

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

return (
  <>

    <NavigationContainer  >
    {viewedOnboarding? <AppStack /> : <AuthStack />}
    </NavigationContainer>
    </>
  );
        
   
    
 
 

}
