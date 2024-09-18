import axios from 'axios';

const commonAPI = async (httpMethod, url, reqBody = null, reqHeader = null) => {
    const reConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await axios(reConfig);
        return response; 
    } catch (error) {
        return error.response || error; 
    }
};

export default commonAPI;
