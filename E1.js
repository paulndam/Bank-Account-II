/** @format */

class BankAccount {
	constructor() {
		this._balance = 0;
		this.accountOpen = false;
	}

	open() {
		if (this.accountOpen === true) {
			return `Account is already opened`;
		} else if (this.accountOpen === false) {
			this.accountOpen = true;
			this._balance = 0;
		}
	}

	close() {
		if (this.accountOpen === true) {
			this.accountOpen = false;
		} else {
			return `Error Account is closed`;
		}
	}

	deposit(amount) {
		if (this.accountOpen === true) {
			if (amount < 0) {
				return `Error amount needs to be greater than 0`;
			}
			this._balance += amount;
		} else {
			console.log(`accounts needed to deposit`);
		}
	}

	withdraw(amount) {
		if (this.accountOpen === true && this._balance >= amount && amount >= 0) {
			this._balance -= amount;
		} else {
			return `Insufficient funds`;
		}
	}

	get balance() {
		if (this.accountOpen === true) {
			return this._balance;
		} else if (this.accountOpen === false) {
			return `Error account is closed`;
		}
	}
}

const money = new BankAccount();

money.open(2323);
money.deposit(1000);
money.withdraw(500);
money.deposit(1500);

console.log(money);
