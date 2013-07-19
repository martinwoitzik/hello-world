/* global define */

define(function () {

    var actions = {

        goto: function () {
//            context.foo();
//            location.href = url;
            return;
        },

        reload: function () {
            actions.goto(location.href);
            return;
        },

    };

    return actions;
});

