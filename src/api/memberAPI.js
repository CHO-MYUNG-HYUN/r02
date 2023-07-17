import axios from "axios"


export const postLogin = async(params) => {

  const res = await axios.post("http://localhost:8080/api/member/login", params)

  return res.data

}

export const postCart = async(item) => {

  const res = await axios.post("http://localhost:8080/api/cart/add", item)

  return res.data

}

export const getCart = async(email) => {

  if (!email) {
    return new Promise((resolve, reject) => {
      resolve([])
    })
  }

  const res = await axios.get(`http://localhost:8080/api/cart/${email}`)

  return res.data

}