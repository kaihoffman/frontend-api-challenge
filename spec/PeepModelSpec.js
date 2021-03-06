describe("Peep Model", function () {
    var testpeep;

    beforeEach( function() {
        testpeep = new Peep (id = 495, body = "what is dead may never die",
        created_at = "2019-02-10T20:15:14.723Z",
        updated_at = "2019-02-10T20:15:14.723Z",
        user_id = 774,
        user_handle = "fff", likes = 0);
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

    it("has a method for displaying the Peep body", function () {
        expect(testpeep.getPeepBody()).toEqual(testpeep.body)
    })

    it("has a method for displaying the Peep author's user handle", function () {
        expect(testpeep.getPeepAuthorHandle()).toEqual(testpeep.user_handle)
    })

    it("has a method for identifying Peep by ID number (Intended for clicking through to single peep view)", function () {
        expect(testpeep.getPeepId()).toEqual(testpeep.id)
    })
});
