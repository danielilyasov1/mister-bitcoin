// import axios from "axios"
import tradeVolume from '../data/trade-volume.json'
import avgBlockSize from '../data/avg-block-size.json'
import marketPrice from '../data/market-price.json'

export const bitcoinService = {
    getRate,
    getTradeVolume,
    getAvgBlockSize,
    getMarketPrice,
    // getConfirmedTransactions,

}
console.log('tradeVolume',tradeVolume.values)


async function getTradeVolume() {
    //x*1000
    return await tradeVolume.values
    // const res = await axios.get(`https://www.blockchain.com/charts/trade-volume`)
    // return res.data
}
async function getAvgBlockSize() {
    return await avgBlockSize.values
    // const res = await axios.get(`https://www.blockchain.com/charts/avg-block-size`)
    // return res.data
}
async function getMarketPrice() {
    console.log('marketPrice.values',marketPrice.values)
    return await marketPrice.values
    // const res = await axios.get(`https://www.blockchain.com/charts/market-price`)
    // return res.data
}


async function getRate(coins) {
    return await 0.00004079
    // const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    // return res.data
}

// לקחת את הגייסון ולשים אותו בדאטה ואז לקרוא לו בסרוויס עם פונקיה אוויט ואת המידע לשים בגרף ואחרי שהכל עובד לקחת את המידע דרך אקסיוס והכתובת של הסייט