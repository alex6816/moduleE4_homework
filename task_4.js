"use strict";

function ElectricApp (brand, power) {
	this.brand = brand;
	this.power = power;

	this.turnOn = function () {
		console.log('Прибор включен.')
	};
	this.turnOff = function () {
		console.log('Прибор выключен.')
	};
}

function Toaster (brand, power, keepWarmFunc) {
	ElectricApp.call(this, brand, power);

	this.keepWarmFunc = keepWarmFunc;
	this.keepWarm = function () {
		if (this.keepWarmFunc) {
			console.log('Функция подогрева включена')
		} else {
			console.log('Функция подогрева отсутствует.')
		}
	};
};

function Iron (brand, power, autoPowerOff, steamBoost) {
	ElectricApp.call(this, brand, power);

	this.autoPowerOff = autoPowerOff;
	this.steamBoost = steamBoost;
	this.verticalSteam = function () {
		console.log('Включен режим вертикального отпаривания.')
	};
};

function Vacuum (brand, power, container, aquafilter, suctionPower) {
	ElectricApp.call(this, brand, power);

    this.container = container;
    this.aquafilter = aquafilter;
    this.suctionPower = suctionPower;
}

let app1 = new Toaster('Tefal', 350, true);
let app2 = new Iron('Bosh', 2000, false, true);
let app3 = new Vacuum('Pioneer', 1800, true, false, 350);

