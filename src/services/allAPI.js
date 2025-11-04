import commonAPI from "./commonAPI";
import ServerURL from "./ServerURL";

//resume add api - called by UserInputs, when finish btn clicked
export const addresumeAPI = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume);
}

//get  resumes api 
//update  resumes api 
//add  history api 




