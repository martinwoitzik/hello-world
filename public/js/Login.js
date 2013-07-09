define(function () {

    var username;
    var password;

    var actions = {

        validate: function(username, password) {
            this.username = username;
            this.password = password;
            var result = false;
            if (username == "martin" && password == "test") {
                result = true;
            }
            return result;
        }
    };

    return actions;

});
