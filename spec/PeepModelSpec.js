describe("Peep Model", function () {
    var testpeep;

    beforeEach( function() {
        testpeep = new Peep (495, body = "what is dead may never die",
        created_at = "2019-02-10T20:15:14.723Z",
        updated_at = "2019-02-10T20:15:14.723Z",
        user_id = 774,
        user_handle = "fff");
    });

    it("should be able to initialize a new peep model", function() {
        expect(testpeep instanceof Peep).toBe(true)
    })

    it("has parameters id, body, created_at, updated_at, user(id, handle)", function () {
        expect(testpeep.id).toEqual(495)
        expect(testpeep.body).toContain("what is dead")
        expect(testpeep.created_at).toContain("2019-02-10")
        expect(testpeep.updated_at).toContain("2019-02-10")
        expect(testpeep.user_id).toEqual(774)
        expect(testpeep.user_handle).toEqual("fff")
    })
});
