import axios from "axios"

export const getUsers = (page) => {
  return axios.get("https://randomuser.me/api/?results=5")
  .then(res => {
    const { results } = res.data
    return results
  })
  .catch(error => {
    return false
  })
}