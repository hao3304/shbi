import axios from 'axios'


export const queryMail = params=>axios.post('http://202.121.178.254:801/mail-*/_search',params)
