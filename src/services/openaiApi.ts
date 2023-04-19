
import { Configuration, OpenAIApi } from "openai";
import devEnvironmentVariables from "./env";







type props = {
    prompt: string,
    key: string | undefined
  };
export  async function Api({prompt, key} : props ) {

    const configuration = new Configuration({
        organization: "org-2uiYiQfNuciBGNdKVMPeduk7",
        apiKey: key
    });
    const openai = new OpenAIApi(configuration);
        
 
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 0,
    })


    return response.data;

}