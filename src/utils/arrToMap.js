import { OrderedMap } from 'immutable'

export default (arr) => {
  return arr.reduce((acc, item) => {
    console.log('Item in arrToMap:' + item)
    return acc.set(item, '')
  }, new OrderedMap({}))
}