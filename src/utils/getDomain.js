export default (url) => {
  let hostname
  if (~url.indexOf('://')) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }
  if (~hostname.indexOf('www')) hostname = hostname.substring(4)
  return hostname
}