(function (exports) {
    function ChitterAPI() {

    }
    ChitterAPI.prototype.getPeeps = function () {
        fetch("http://chitter-backend-api.herokuapp.com/peeps?=")
        .then(function(response) { return response.json() })

    }
    exports.ChitterAPI = ChitterAPI
})
