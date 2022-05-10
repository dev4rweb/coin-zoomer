export const indexSubscribersApi = () => {
    return axios.get('api/subscribers')
        .then(res => res).catch(err => err)
};

export const storeSubscriberApi = subscribe => {
    return axios.post('api/subscribers', {...subscribe})
        .then(res => res).catch(err => err)
};

export const showSubscriberApi = subscribeId => {
    return axios.get(`api/subscribers/${subscribeId}`)
        .then(res => res).catch(err => err)
};

export const updateSubscriberApi = subscribe => {
    return axios.post('api/subscribers', {
        _method: 'PUT',
        ...subscribe
    }).then(res => res).catch(err => err)
};

export const deleteSubscriberApi = subscribeId => {
    return axios.post(`api/subscribers/${subscribeId}`, {
        _method: 'DELETE'
    }).then(res => res).catch(err => err)
};
