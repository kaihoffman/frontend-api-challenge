(function (exports) {
    function Peep(id, body, created_at, updated_at, user_id, user_handle, likes){
        this.id = id
        this.body = body
        this.created_at = created_at
        this.updated_at = updated_at
        this.user_id = user_id
        this.user_handle = user_handle
        this.likes = likes
    }
    Peep.prototype.getPeepBody = function () {
        return this.body;
    }

    Peep.prototype.getPeepAuthorHandle = function () {
        return this.user_handle
    }

    exports.Peep = Peep
})(this);
