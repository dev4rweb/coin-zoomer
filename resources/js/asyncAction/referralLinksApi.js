export const storeReferralLinkApi = user_id => {
    return axios.post('/referral-links', {user_id})
        .then(res => {
            console.log('storeReferralLinkApi res', res)
            return res
        })
        .catch(err => {
            console.log('storeReferralLinkApi err', err)
            return err
        });
};

export const destroyReferralLinkApi = linkId => {
    return axios.post(`/referral-links/${linkId}`, {
        _method: 'DELETE'
    })
        .then(res => {
            console.log('destroyReferralLinkApi res', res)
            return res
        })
        .catch(err => {
            console.log('destroyReferralLinkApi err', err)
            return err
        });
};
