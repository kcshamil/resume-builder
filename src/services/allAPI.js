import commonAPI from "./commonAPI";
import ServerURL from "./ServerURL";

//resume add api - called by UserInputs, when finish btn clicked
export const addresumeAPI = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume);
}

//get  resumes api 

export const getResumeAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}
//update  resumes api 
export const updateResumeAPI = async (id,resume)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}
//add history api 
export const addHistoryAPI = async (history)=>{
    return await commonAPI(`${ServerURL}/history/`,"POST",history)
}
// get history api
//remove history api 




