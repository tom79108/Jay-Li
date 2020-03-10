function car() {
    // field
    this.speed = 0
    this.number = ""
    this.fuel = 0
    // method
    this.setspeed = function (speed) { this.speed = speed };
    this.isOverSpeed = function (SpeedLimit) { return this.speed > SpeedLimit ? "Over" : "InSpeedLimit"}
}

var NewCar = new car();
NewCar.speed = 80;
NewCar.number = "AAA-1234";
console.log(NewCar.number + " has speed:" + NewCar.speed)
console.log(NewCar.isOverSpeed(100), NewCar.isOverSpeed(50))