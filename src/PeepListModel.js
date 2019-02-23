(function (exports) {
    function PeepList() {
        this.PeepList = []
    }

    PeepList.prototype.addPeepToList = function (peep) {
        return this.PeepList.push(peep)
    }

    PeepList.prototype.listPeeps = function () {
        return this.PeepList;
    }
    exports.PeepList = PeepList

})(this);
