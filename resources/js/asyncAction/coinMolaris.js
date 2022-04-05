import axios from "axios";

export const getSingleRecordMoralis = (address = null, chain = 'eth') => {
    const mainPath = 'https://deep-index.moralis.io/api/v2/erc20/'
    const contract_address = address ?? '0x320d31183100280CcdF69366CD56180Ea442A3E8'

// axios.get('https://deep-index.moralis.io/api/v2/erc20/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce/price?chain=eth', {
    // axios.get('https://deep-index.moralis.io/api/v2/erc20/0x320d31183100280CcdF69366CD56180Ea442A3E8/price?chain=eth', {
    return  axios.get(`${mainPath}${contract_address}/price?chain=${chain}`, {
        headers: {
            'X-API-Key': 'UpQ3vKSY4Lwb4c09DfS4pNMsf43YXLplFTudha98Iitks2giWK4e3Swv3S0f3Ic5'
        }
    }).then(res => {
        // console.log('getSingleRecord res', res)
        return res
    }).catch(err => {
        // console.log(err)
    });


};

/*export const testProm = new Promise((resolve, reject) => {
    // getSingleRecordMoralis()
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 5000);
});*/

/*testProm.then(data => {
    console.log('Promise Resolved', data)
    // const p2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         data.modified = true
    //         resolve(data)
    //     }, 3000);
    // });
    // p2.then(clientData => {
    //     console.log('Data received', clientData)
    // });
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
            // reject(data)
        }, 3000);
    });
}).then(clientData => {
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData
}).then(data => {
    console.log('From last then', data)
}).catch(err => console.error('Error ', err));

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(()=> resolve(), ms)
    });
};*/

/*sleep(2000).then(()=> console.log('After 2 sec'))
sleep(5000).then(()=> console.log('After 5 sec'))*/

/*Promise.all([sleep(5000), sleep(7000)])
    .then(()=> console.log('all Promise'))

Promise.race([sleep(5000), sleep(7000)])
    .then(()=> console.log('race Promise'))*/
