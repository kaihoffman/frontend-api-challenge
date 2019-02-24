describe("Peep List View Model", function () {
    beforeEach( function() {
        peeplist = new PeepList();
        testpeep = new Peep(id = 495, body = "what is dead may never die",
        created_at = "2019-02-10T20:15:14.723Z",
        updated_at = "2019-02-10T20:15:14.723Z",
        user_id = 774,
        user_handle = "fff", likes = 0);
        testpeep2 = new Peep(id = 494, body = "hello test",
        created_at = "2019-02-10T20:14:14.723Z",
        updated_at = "2019-02-10T20:14:14.723Z",
        user_id = 770,
        user_handle = "770", likes = 0);
        testpeep3 = new Peep(id = 493, body = "this is a much longer peep for testing, certainly longer than the others",
        created_at = "2019-02-09T08:15:27.723Z",
        updated_at = "2019-02-09T08:15:27.723Z",
        user_id = 019,
        user_handle = "mr erudite", likes = 0);
        peeplist.addPeepToList(testpeep);
        peeplist.addPeepToList(testpeep2);
        peeplist.addPeepToList(testpeep3);
    });

    it("A List View can take a List as a parameter and display its contents", function() {
        listview = new ListView()
        testoutput = listview.printPeeps(peeplist)
        expect(testoutput).toContain("this is a much longer peep for testing")
    })

    it("A list view print method wraps each peep in html DIVs", function () {
        expect(testoutput).toContain("<div><section>fff</section><section>what is dead may never die")
    })

});
