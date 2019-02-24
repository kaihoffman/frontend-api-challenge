describe("Peep List model", function () {
    beforeEach( function() {
        peeplist = new PeepList();
        testpeep = new Peep();
        testpeep2 = new Peep();
        testpeep3 = new Peep();
        peeplist.addPeepToList(testpeep)
        peeplist.addPeepToList(testpeep2);
        peeplist.addPeepToList(testpeep3);

    });

    it("Peep Lists should be able to take a Peep model as an arg", function () {
        expect(peeplist.PeepList).toContain(testpeep)
    })

    it("Peep lists should be able to store multiple instances of peep", function () {
        expect(peeplist.PeepList[1]).toEqual(testpeep2)
    })

    it("Has a method for displaying a list's contents", function () {
        expect(peeplist.listPeeps()).toContain(testpeep2)
    })
});
