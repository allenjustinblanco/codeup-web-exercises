(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        'getArea': function () {

            return Math.PI * (Math.pow(this.radius,2));
        },


        logInfo: function (doRounding) {

            if(doRounding === true) {
                var result;
                return result.round();
            } else {
                return doRounding;
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
