import fetch from 'node-fetch';

const login = async ({userName, password}) => {
    const options = {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        header: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('https://dev.stedi.me/login',options);
    const loginResonse = await apiResponse.text();

    return loginResonse;

}

export default login;