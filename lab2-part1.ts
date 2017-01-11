class CheckingAccount {
    private balance:number;
    private ownerName:string;

    constructor(initialBalance:number, theOwnerName:string) {
        this.balance = initialBalance;
        this.ownerName = theOwnerName;
    }

    deposit(amount:number) {
        this.balance += amount;
    }

    withdraw(amount:number) {
        if (this.balance > amount) {
            this.balance -= amount;
        } else {
            console.log("Not enough money in account.");
        }
        
    }

    checkBalance() {
        console.log(`${this.ownerName} has $${this.balance} in their account.`)
    }
}

let ownerA:CheckingAccount = new CheckingAccount(1200, "Fred");
let ownerB:CheckingAccount = new CheckingAccount(5000, "Bob");

ownerA.deposit(500);
ownerB.withdraw(200);
ownerA.checkBalance();
ownerB.checkBalance();