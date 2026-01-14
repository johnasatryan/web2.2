// // // // abstract class Musician {
// // // //   private name: string;
// // // //   abstract play();
// // // // }
var Hawk = /** @class */ (function () {
    function Hawk() {
    }
    Hawk.prototype.fly = function () {
        console.log('Hawk flies...');
    };
    Hawk.prototype.walk = function () {
        console.log('Hawk walks...');
    };
    return Hawk;
}());
