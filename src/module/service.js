import axios from 'axios';
let root = process.env.API_ROOT;
let service = process.env.SERVICE_ROOT;
export const queryMail = params=>axios.post(root + '/mail-*/_search',params)

export const getModes = ()=>axios.get(service + '/mode')
export const postMode = params=>axios.post(service + '/mode',params)
export const updateMode = params=>axios.patch(service + '/mode',params)
export const deleteMode = id=>axios.delete(service + `/mode/${id}`)
