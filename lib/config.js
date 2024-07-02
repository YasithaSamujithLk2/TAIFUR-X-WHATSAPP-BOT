const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const APIs = {
  1:'https://apkcombo.com',  //https://apkcombo.com/search
  2:'apk-dl.com',
  3:'https://apk.support', // https://apk-dl.com/search
  4:'https://apps.evozi.com/apk-downloader',
  5:'https://pool.apk.aptoide.com', // https://pool.apk.aptoide.com. http://ws75.aptoide.com/api/7
  6:"https://cafebazaar.ir"
}
const Proxy = (url)=>(url ? `https://translate.google.com/translate?sl=en&tl=fr&hl=en&u=${encodeURIComponent(url)}&client=webapp`: '')

const api = (ID, path = '/', query = {}) => (ID in APIs ? APIs[ID] : ID) + path + (query ? '?' + new URLSearchParams(Object.entries({...query})) : '')


module.exports = { APIs, Proxy, api}
