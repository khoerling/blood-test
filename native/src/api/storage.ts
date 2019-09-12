import { AsyncStorage } from 'react-native'

// auto serialize to/from async storage
const get = async (key: string) => JSON.parse(await AsyncStorage.getItem(key)),
  set = async (key: string, value: any) => {
    return await AsyncStorage.setItem(key, JSON.stringify(value))
  },
  mrem = async (...keys: string[]) => {
    return await AsyncStorage.multiRemove(keys)
  },
  merge = async (key: string, value: any) => {
    try {
      const cur = JSON.parse((await AsyncStorage.getItem(key)) || '{}')
      const copy = Object.assign({}, cur, value)
      AsyncStorage.setItem(key, JSON.stringify(copy))
      return copy
    } catch (error) {
      console.warn(`error saving ${key}: ${error}`)
    }
  }

export { get, set, mrem, merge }
