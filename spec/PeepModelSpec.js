describe("Peep Model", function () {

    beforeEach( function() {
    });

    it("should be able to initialize a new peep model", function() {
        var testpeep = new Peep();
        expect(testpeep instanceof Peep).toBe(true)
    })
});
