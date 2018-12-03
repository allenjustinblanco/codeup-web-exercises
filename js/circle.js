(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        //Math.PI = 3.14159265358979323
        //Math.pow returns the base to the exponent power
        getArea: function () {
            return Math.PI * (Math.pow(this.radius,2));
        },
        //Math.round returns the number to the nearest integer
        logInfo: function (doRounding) {
            var area = this.getArea();
            if(doRounding){
                area = Math.round(this.getArea());
            }
            console.log(`Area of a circle with radius: ${this.radius}, is: ${area}`);
        }
    };
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();