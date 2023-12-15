import axios from 'axios';
import config from './config';
import {getAuthToken, getUserAuthToken, gotoLogin} from "../utils/storageHelper";


const instance = axios.create({
    baseURL: config.BASE_URL,
    timeout: 60000,
    withCredentials: true,
    crossDomain: true
});


// Add a request interceptor
instance.interceptors.request.use(async config => {
    const authData = getUserAuthToken();
    const tokenData = authData ? authData : getAuthToken();
    if (tokenData && !instance.skipToken) {
        config.headers['Authorization'] = `Bearer ${tokenData}`;
    }
    if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json';
    }
    config.headers['Access-Control-Allow-Credentials'] = true;
    return config;
}, error => {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(response => {
    return response;
}, async error => {
    console.log('error-----', error?.response)
    const originalRequest = error?.config;
    console.log(originalRequest);
    if ((error?.response?.status === 401)) {
        if (originalRequest.url && originalRequest.url?.indexOf('identity') != -1) {
            //do nothing
        } else {
            console.log("error:", error?.response);
            const authData = getUserAuthToken()
            if (authData) {
                gotoLogin();
            }
        }
        return Promise.reject(error);
    }

    return Promise.reject(error);
});



export const get = url => {
    return new Promise((resolve, reject) => {
        instance.useAuthToken = false;
        instance.get(url)
            .then(result => {
                if (result.status === 200) {
                    resolve(result.data);
                } else {
                    reject(result.data);
                }
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        instance.useAuthToken = false;
        instance.post(url, data)
            .then(result => {
                if (result.status === 200 || result.status === 201) {
                    resolve(result.data);
                } else {
                    reject(result.data);
                }
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const postWithAuth = (url, data) => {
    return new Promise((resolve, reject) => {
        instance.useAuthToken = true;
        instance.post(url, data)
            .then(result => {
                if (result.status === 200 || result.status === 201) {
                    resolve(result.data);
                } else {
                    reject(result.data);
                }
            })
            .catch(error => {
                reject(error);
            })
    });
}

export const put = (url, data) => {
    return new Promise((resolve, reject) => {
        instance.useAuthToken = false;
        instance.put(url, data)
            .then(result => {
                if (result.status === 200) {
                    resolve(result.data);
                } else {
                    reject(result.data);
                }
            })
            .catch(error => {
                reject(error);
            })
    });
};
export const getWithHeader = (url, header) => {
    return new Promise((resolve, reject) => {
        instance.useAuthToken = false;
        instance.get(url, header)
            .then(result => {
                if (result.status === 200) {
                    resolve(result.data);
                } else {
                    reject(result.data);
                }
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const getWithBlob = (url, header) => {
    return new Promise((resolve, reject) => {
        instance.useBlob = true;
        instance.get(url, header)
            .then(result => {
                if (result.status === 200) {
                    resolve(result)
                } else {
                    reject(result);
                }
            })
            .catch(error => {
                reject(error);
            })
    });
};

export const getWithAuth = url => {
    return new Promise((resolve, reject) => {
        instance.useAuthToken = true;
        instance.get(url)
            .then(result => {
                if (result.status === 200) {
                    resolve(result.data);
                } else {
                    reject(result.data);
                }
            })
            .catch(error => {
                reject(error);
            })
    });
};
// export const putWithHeader = (url, data, header) => {
//     return new Promise((resolve, reject) => {
//         instance.useAuthToken = false;
//         instance.put(url, data, header)
//             .then(result => {
//                 if (result.status === 200) {
//                     resolve(result.data);
//                 } else {
//                     reject(result.data);
//                 }
//             })
//             .catch(error => {
//                 reject(error);
//             })
//     });
// };

