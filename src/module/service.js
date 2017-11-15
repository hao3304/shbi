import axios from 'axios';
let root = process.env.API_ROOT;
let service = process.env.SERVICE_ROOT;
let search = process.env.SEARCH_ROOT;

export const queryMail = params=>axios.post(root + '/mail-*/_search',params)

export const getModes = ()=>axios.get(service + '/mode')
export const postMode = params=>axios.post(service + '/mode',params)
export const updateMode = params=>axios.patch(service + '/mode',params)
export const deleteMode = id=>axios.delete(service + `/mode/${id}`)

export const doCmd = params=>axios.get('http://202.121.178.254:801/service' + `/ssh`, {params:params})

export const searchRecord = params=>axios.get(search + `/data`, {params:params})
