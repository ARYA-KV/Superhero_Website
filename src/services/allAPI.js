import SERVERURL from "./serverurl";
import commonAPI from "./commonAPI";

// API to add a grievance
export const addGrievanceAPI = async (reqBody) => {   
    return await commonAPI("POST", `${SERVERURL}/grievance/add`, reqBody);
};
