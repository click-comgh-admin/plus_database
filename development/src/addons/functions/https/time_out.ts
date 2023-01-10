export default async function http(input: RequestInfo, init?: RequestInit, timeOut: number = 7000) {
  return Promise.race([
    fetch(input, init),
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Connection timeout, check network for internet access')), timeOut)
    })
  ])
}