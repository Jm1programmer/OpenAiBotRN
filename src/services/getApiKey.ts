import AsyncStorage from "@react-native-async-storage/async-storage"

const ApiKeyGet = async () => {
    try {
      const value = await AsyncStorage.getItem('@ApiKey')

      if (value !== null) {
         return value
      }

    } catch (err) {
        console.log('Error @ApiKey:', err)
    } finally {

    }

  }




  export default ApiKeyGet