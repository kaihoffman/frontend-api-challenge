describe("Peep API parser", function () {
    beforeEach( function() {
        peeplist = new PeepList();

    });

    it("has a method to get peep data into a variable from the API", function () {
        peepAPItest = fetch("http://chitter-backend-api.herokuapp.com/peeps?=")
        .then(function(response) { return response.json() });
        expect(peepAPItest).toEqual(jasmine.any(Object))
    })
})
