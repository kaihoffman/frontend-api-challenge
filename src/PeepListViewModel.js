(function (exports) {
    function ListView() {

    }

    ListView.prototype.printPeeps = function (peeplist) {
        var htmloutput = ""
        peeplist.listPeeps().forEach(function(peep) {
            htmloutput += ("<div>" + "<section>" + peep.getPeepAuthorHandle() + "</section>" + "<section>" + peep.getPeepBody() + "</section>" + "</div>")
        })
        return htmloutput;
    }

    exports.ListView = ListView
})(this);
