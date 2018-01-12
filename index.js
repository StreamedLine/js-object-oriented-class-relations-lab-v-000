const store = {drivers: [], passengers: [], trips: []}

let driverId     = 0,
		passengerId  = 0,
		tripId       = 0;


class Driver {
	constructor (name) {
		this.name = name;
		this.id = ++driverId;
	
		store.drivers.push(this);
	}

	trips() {
		return store.trips.filter(function(trip){return trip.driverId === this.id }.bind(this));
	}

	passengers() {
		return this.trips().map(trip => trip.passenger())
	}
}

class Passenger {
	constructor (name) {
		this.name = name;
		this.id = ++passengerId;

		store.passengers.push(this);
	}

	trips() {
		return store.trips.filter(function(trip){return trip.passengerId === this.id}.bind(this));
	}

	drivers() {
		return this.trips().map(trip => trip.driver());
	}
}

class Trip {
	constructor (driver, passenger) {
		this.driverId = driver.id;
		this.passengerId = passenger.id;
		
		this.id = ++tripId;

		store.trips.push(this);
	}

	passenger() {
		return store.passengers.filter(function(passenger){return passenger.id == this.passengerId }.bind(this))[0];
	}

	driver() {
		return store.drivers.filter(function(driver){return driver.id == this.driverId }.bind(this))[0];
	}
}