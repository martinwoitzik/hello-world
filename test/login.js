var assert = require('chai').assert;

var Login = require("../public/js/web/Login");

describe('Login', function(){

    it('should return false when username/password are incorrect', function() {
        assert.isFalse(
            Login.validate('wrong-username', 'wrong-password')
        );
    });

    it('should return true when username/password are correct', function() {
        assert.isTrue(
            Login.validate('martin', 'test')
        );
    });

});
