"use strict";

class ElectricApp {
	constructor (brand, power) {
		this.brand = brand;
	    this.power = power;
    }
	turnOn () {console.log('Прибор включен.')}
	turnOff () {console.log('Прибор выключен.')}
}
  

class Toaster extends ElectricApp {
	constructor (brand, power, keepWarmFunc) {
		super (brand, power);
		this.keepWarmFunc = keepWarmFunc;
	}
	keepWarm () {
		if (this.keepWarmFunc) {
			console.log('Функция подогрева включена')
		} else {
			console.log('Функция подогрева отсутствует.')
		}
	}
}


class Iron extends ElectricApp {
	constructor (brand, power, autoPowerOff, steamBoost) {
		super (brand, power);
		this.autoPowerOff = autoPowerOff;
	    this.steamBoost = steamBoost;
	}
	verticalSteam () {
		console.log('Включен режим вертикального отпаривания.')
	}
}

class Vacuum  extends ElectricApp {
	constructor (brand, power, container, aquafilter, suctionPower) {
		super (brand, power);
        this.container = container;
        this.aquafilter = aquafilter;
        this.suctionPower = suctionPower;
	}
}

let app1 = new Toaster('Tefal', 350, true);
let app2 = new Iron('Bosh', 2000, false, true);
let app3 = new Vacuum('Pioneer', 1800, true, false, 350);
