
import { Configuration, OpenAIApi } from "openai";
import devEnvironmentVariables from "./env";
const configuration = new Configuration({
    organization: "org-2uiYiQfNuciBGNdKVMPeduk7",
    apiKey: devEnvironmentVariables.DEV_BACKEND_URL
});
const openai = new OpenAIApi(configuration);


type props = {
    prompt: string,
  };
export  async function Api({prompt} : props ) {

 
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 0,
    })
   
    return response.data;

}