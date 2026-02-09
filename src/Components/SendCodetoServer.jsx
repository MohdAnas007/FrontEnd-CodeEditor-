import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
export const SendCodeToServer = async (code, input, language) => {

    try {
       
        console.log("API_BASE:", process.env.REACT_APP_API_BASE);

       
        const datafromBackend = await axios.post(`${API_BASE}/api/runcode`, { code, input, language });

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