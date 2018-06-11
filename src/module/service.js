import axios from 'axios';
import store from '../store'
let root = process.env.API_ROOT;
let service = process.env.SERVICE_ROOT;
let search = process.env.SEARCH_ROOT;

axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
  if (store.token) {
    config.headers.Authorization = `Bearer ${store.token}`;
  }
  return config;
}, function (err) {
  return Promise.reject(err);
});
axios.interceptors.response.use(response=>{
  const data = response.data;
  return data;
},err=>{
  if(err.response.status == 503) {
    store.login = false;
  }
  if(err.response.status == 403) {
    alert('没有权限！');
    store.login = false;
    localStorage['mail__token'] = null;
  }
})

export const queryMail = params=>axios.post(root + '/mail-*/_search',params)
export const getModes = ()=>axios.get(service + '/mode')
export const postMode = params=>axios.post(service + '/mode',params)
export const updateMode = params=>axios.patch(service + '/mode',params)
export const deleteMode = id=>axios.delete(service + `/mode/${id}`)

export const getUser = page=>axios.get(service + '/user',{params:{page:page}})
export const postUser = params=>axios.post(service + '/user',params)
export const updateUser = params=>axios.patch(service + '/user',params)
export const updateUserById = (id,params)=>axios.patch(service + `/user/${id}`,params)
export const deleteUser = id=>axios.delete(service + `/user/${id}`)

export const doCmd = params=>axios.get(service + `/ssh`, {params:params})
export const getLogs = (page)=>axios.get(service + '/log',{params:{page:page}})

export const searchRecord = params=>axios.get(search + `/api/search`, {params:params})

export const doLogin = params=>axios.post('/auth/login',params);
