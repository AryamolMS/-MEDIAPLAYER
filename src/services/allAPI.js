//upload video

import Category from "../components/Category"
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//upload
export const uploadVideo=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/video`,reqBody)
}

//get all uploaded videos
export const getAllVideos=async()=>{
    return await commonAPI('GET',`${serverURL}/video`,"")
}

//delete
export const deleteVideo=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

//add history
export const addHistory=async(vdetails)=>{
 return await commonAPI('POST',`${serverURL}/history`,vdetails)
}

//api to get history from json-server
export const getAllHistory=async()=>{
 return await commonAPI('GET',`${serverURL}/history`,'')
}


//apicall to delete video history
export const deleteVideoHistory=async(id)=>{
return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
   }

//api to add category to json server
export const addAllCategory=async(body)=>{
   return await commonAPI('POST',`${serverURL}/category`,body)
}

//api to get all categories from json server

export const gettAllCategories=async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}


//api to delete category from json-server
export const deleteCategory=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}


//
export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/video/${id}`,{})
}

//api to add the cateogry with new videos
export const updateCategory = async(id,body)=>{
    return await commonAPI("PUT",`${serverURL}/Category/${id}`,body)
}