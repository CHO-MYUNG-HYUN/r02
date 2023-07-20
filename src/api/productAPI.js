import { createSearchParams } from "react-router-dom";
import jwtAxios from "../util/JWTUtil";

// export const getList = async (param) => {
//   const { page, size, type, keyword } = param || { page: 1, size: 10, type: null, keyword: null }
//   let queryStr = `?page=${page}&size=${size}`
//   if (keyword) {
//     queryStr += `&type=${type}&keyword=${keyword}`
//   }
//   const res = await axios.get(`http://localhost:8080/api/products/list${queryStr}`)
//   return res.data
// }

export const getList = async (queryObj) => {

  const queryString = createSearchParams(queryObj).toString()
  
  const res = await jwtAxios.get(`http://localhost:8080/api/products/list?${queryString}`);

  return res.data

}

export const postProduct = async (formData) => {

  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }

  const res = await jwtAxios.post('http://localhost:8080/api/products/', formData, header)

  return res.data

}

export const getProduct = async (pno) => {

  const res = await jwtAxios.get(`http://localhost:8080/api/products/${pno}`)

  return res.data
  
}

export const deleteProduct = async (pno) => {

  const res = await jwtAxios.delete(`http://localhost:8080/api/products/${pno}`)

  return res.data
  
}

export const putProduct = async (formData) => {

  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }

  const res = await jwtAxios.post('http://localhost:8080/api/products/modify', formData, header)

  return res.data

}

