const domain = 'https://api.aboluochinese.cn/';

export default rest = {
    GET: (subdomain) => {
        return fetch(`${domain}${subdomain}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
        });
    },
    POST: (subdomain, body) => {
        return fetch(`${domain}${subdomain}`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        });
    }
};