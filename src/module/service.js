import axios from 'axios';
let root = process.env.API_ROOT;
export const queryMail = params=>axios.post(root + '/mail-*/_search',params)
