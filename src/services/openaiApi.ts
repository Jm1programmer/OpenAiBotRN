
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
    console.log(response.data)
    return response.data;

}