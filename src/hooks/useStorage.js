import { storageStr } from '../constants'

const useStorage = (key) => {

  const update = (value) => {

    const getStorage = localStorage.getItem("dictDemo") || storageStr
    const storage = JSON.parse(getStorage)
    const storageCopy = {...storage}    

    storageCopy[key] = value
    localStorage.setItem("dictDemo", JSON.stringify(storageCopy))

  }

  return {
    update
  }

}

export default useStorage