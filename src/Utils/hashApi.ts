import crypto from 'crypto-js'

export const hashApi = () => {
  const ts = new Date().getTime()
  
  const privateKey = process.env.REACT_APP_API_KEY_PRIVATE || ''
  const publicKey = process.env.REACT_APP_API_KEY_PUBLIC || ''

  const hash = crypto.MD5(ts + privateKey + publicKey).toString();

  return hash
}