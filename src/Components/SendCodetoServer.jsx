import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
export const SendCodeToServer = async (code, input, language) => {

    try {
       
      console.log(code,language);
        const datafromBackend = await axios.post(`${API_BASE}/api/runcode`, { code, input, language });
        console.log("datafromBackend");
        return datafromBackend.data;

    }
    catch (err) {
      if(err.response){
        return {error:err.response.data.message};

      }
      return {
        error:err.message,
      }
    }

}