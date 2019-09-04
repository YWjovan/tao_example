(function () {

    ReactDOM.helper = {
        commonURL: "http://yw.dev.shusiou.win",

        parseJSON: function(response) {
            return response.json();
        },

        checkStatus: function(response) {
            if (response.status >= 200 && response.status < 500) {
                return response;
            }

            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        },

        request: function(options = {}) {
            const {data, url} = options;
            options = {...options};
            options.mode = 'cors';
            delete options.url;
            if(data) {
                delete options.data;
                //options.body = JSON.stringify({data});
            }
            options.headers = {
                'Content-Type': 'application/json'
            };
            return fetch(this.commonURL + url, options)
                .then(this.checkStatus)
                .then(this.parseJSON)
                .catch(err => ({err}));
        }
    }
})()


