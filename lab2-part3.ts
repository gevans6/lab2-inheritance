class Account {
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
            console.log("Not enough money in account.")
        }
        
    }

    checkBalance() {
        console.log(`${this.ownerName} has $${this.balance} in their account.`)
    }
}

let ownerE:Account = new Account(10000, "John");
let ownerF:Account = new Account(300, "Tom");

ownerE.deposit(500);
ownerF.withdraw(200);
ownerE.checkBalance();
ownerF.checkBalance();
ownerF.withdraw(200);
