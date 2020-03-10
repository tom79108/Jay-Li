function Car() {
}

// field
Car.prototype.speed = 0;
Car.prototype.number = "";
Car.prototype.fuel = 0;
// method
Car.prototype.setSpeed = function (speed) { Car.prototype.speed = speed };
Car.prototype.isOverSpeed = function (SpeedLimit) { return Car.prototype.speed > SpeedLimit ? "Over" : "InSpeedLimit"; };

function HybridCar() {

}
HybridCar.prototype = new Car();
HybridCar.prototype.__proto__ = Car.prototype;
HybridCar.prototype.batteryLimit = 50000;
HybridCar.prototype.totalLength = function () {
    return this.fuel * 21 + this.batteryLimit / 500;
};
console.log("NormalCar:");
var NormalCar = new Car();
NormalCar.setSpeed(60);
NormalCar.number = "AAA-1234";
console.log(NormalCar.number + " has speed:" + NormalCar.speed);
console.log(NormalCar.isOverSpeed(100), NormalCar.isOverSpeed(50));

console.log("HybridCar:");
var NewCar = new HybridCar();
console.log(typeof myCar2, typeof HybridCar);
NewCar.setSpeed(80);
NormalCar.number = "DDD-5678";
NormalCar.fuel = 70;
console.log(NewCar.number + " has speed:" + NewCar.speed);
console.log(NewCar.isOverSpeed(100), NewCar.isOverSpeed(50));
NewCar.batteryLimit = 100000;
console.log("myCar2 total length=",NewCar.totalLength);
