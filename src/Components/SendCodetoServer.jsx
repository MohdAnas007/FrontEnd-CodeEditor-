import axios from 'axios';
const API_URL=import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const SendCodeToServer = async (code, input, language) => {

    try {
      
        const datafromBackend = await axios.post(`${API_URL}/api/runcode`, { code, input, language });

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