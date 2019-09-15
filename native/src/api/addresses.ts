import { merge, get, set } from './storage'

// auto serialize to/from async storage
const key = 'addresses',
  getAll = async () => {
    return await getAddresses()
  },
  getActive = async () => {
    const addresses = await getAddresses()
    if (!addresses.length) return null // guard
    return addresses.filter(a => a.isActive === true).pop()
  },
  getInactive = async () => {
    const addresses = await getAddresses()
    if (!addresses.length) return [] // guard
    return addresses.filter(a => a.isActive !== true)
  },
  deactivateAll = async () => {
    const addresses = await get(key)
    if (!addresses) return false // guard
    for (const [k, v] of Object.entries(addresses))
      addresses[k].isActive = false
    return await set(key, addresses)
  },
  add = async address => {
    await merge(key, { [address.nickname]: address }) // save
  }

// XXX returns an array
async function getAddresses() {
  var addresses = []
  for (const [k, v] of Object.entries((await get(key)) || [])) {
    addresses.push(v)
  }
  return addresses
}

export { getAll, getActive, getInactive, deactivateAll, add }
