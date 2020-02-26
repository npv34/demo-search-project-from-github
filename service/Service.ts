import fetch from 'node-fetch';

export class Service {
    constructor() {
    }

    async getData(keyWord: string) {
        let url = 'https://api.github.com/search/repositories?q=' + keyWord;
        const response = await fetch(url, {
            method: 'GET'
        });
        return await response.json();
    }

}
