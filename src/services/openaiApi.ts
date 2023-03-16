
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-2uiYiQfNuciBGNdKVMPeduk7",
    apiKey: "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"
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