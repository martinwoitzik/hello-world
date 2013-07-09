module.exports = {

        validate: function(username, password) {
            var result = false;
            if (username == "martin" && password == "test") {
                result = true;
            }
            return result;
        }

}
