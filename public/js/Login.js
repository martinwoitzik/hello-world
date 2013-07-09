if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(function () {

    var actions = {

        validate: function(username, password) {
            var result = false;
            if (username == "martin" && password == "test") {
                result = true;
            }
            return result;
        }
    };

    return actions;

});
