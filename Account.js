class Account {
	constructor(name, balance, creditLimit) {
		this.name = name;
		this.balance = balance;
		this.creditLimit = creditLimit;
	}

	makeDeposit(amount) {
		if (amount > 0) {
			this.balance += amount;
		}
	}

	makeWithdrawal(amount) {
		if (amount < this.balance + this.creditLimit && amount < 5001) {
			this.balance -= amount;
		}
	}
}

const user1 = new Account('Martijn', 500, 1000);
console.log(user1);
user1.makeDeposit(100);
user1.makeWithdrawal(2000);
console.log(user1.balance);

module.exports = Account;
