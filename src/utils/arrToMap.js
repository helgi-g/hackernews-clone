import { OrderedMap } from 'immutable'

export default (arr, DataRecord) => {
  return arr.reduce((acc, item) => {
    return acc.set(item.id, DataRecord ? new DataRecord(item) : item)
  }, new OrderedMap({}))
}