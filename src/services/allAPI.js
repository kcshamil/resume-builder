import commonAPI from "./commonAPI";
import ServerURL from "./ServerURL";

//resume add api - called by UserInputs, when finish btn clicked
export const addresumeAPI = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume);
}

//get  resumes api - called from ViewResume , when page load(), inside useeffect hook

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
// get history api - called from history component , when page load(), inside useeffect hook
export const getHistoryAPI = async ()=>{
    return await commonAPI(`${ServerURL}/history`,"GET",{})
}
//remove history api 
export const removeHistoryAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/history/${id}`,"DELETE",{})
}




