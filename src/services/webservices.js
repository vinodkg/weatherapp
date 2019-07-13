export default class WebServices {
    _defaul_config = {

    };

    _getHeaders(headersList) {
        let headers = new Headers();
        for(let header in headersList){
            headers.append(header["key"], header["value"]);
        }
        return headersList;
    }
    
    _getInitConfig(){

    }

    get(url, options){
        return fetch(url)
                .then(response => response.json());
    }
}