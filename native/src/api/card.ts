import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io'
import { Platform, processColor } from 'react-native'
import { get, set } from './storage'

const key = 'card',
  scanCard = async () => {
    return await scan()
  },
  getCard = async () => {
    return (await get(key)) || null
  }

if (Platform.OS === 'ios') CardIOUtilities.preload()

// ---------
async function scan() {
  const card = await CardIOModule.scanCard({
    guideColor: processColor('#ffffff'),
    suppressManualEntry: true,
    keepStatusBarStyle: true,
    hideCardIOLogo: true,
    requireCardholderName: true
  })
  return await save(card) // store
}

async function save(card: string) {
  set(key, card) // don't wait
  return card
}

export { scanCard, getCard }
