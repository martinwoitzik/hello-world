var assert = require('chai').assert;

var Login = require("../public/js/Login");
var login = new Login();

describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});

describe('Login', function(){
    it('should return false when username/password are incorrect', function() {
        assert.isTrue( login('wrong-username', 'wrong-password') );
    })
});
