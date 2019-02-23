(function (exports) {
    function Peep(id, body, created_at, updated_at, user_id, user_handle){
        this.id = id
        this.body = body
        this.created_at = created_at
        this.updated_at = updated_at
        this.user_id = user_id
        this.user_handle = user_handle
    }
    // Peep.prototype. = function () {
    //     return this._noteText;
    // };
    exports.Peep = Peep
})(this);
