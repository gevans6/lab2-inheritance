class SavingsAccount {
    private balance:number;
    private ownerName:string;
    private withdrawlsLeft = 3;

    constructor(initialBalance:number, theOwnerName:string) {
        this.balance = initialBalance;
        this.ownerName = theOwnerName;
    }

    deposit(amount:number) {
        this.balance += amount;
    }

    withdraw(amount:number) {
        if (this.withdrawlsLeft > 0 && this.balance > amount){
            this.balance -= amount;
            this.withdrawlsLeft -= 1;
        } else {
            console.log("You have exceeded the number of allows withdrawls from your savings account or there is not enough money in the account.");
        }
        
    }

    checkBalance() {
        console.log(`${this.ownerName} has $${this.balance} in their account.`)
    }
}

let ownerC:SavingsAccount = new SavingsAccount(1500, "Fred");
let ownerD:SavingsAccount = new SavingsAccount(5000, "Bob");

ownerC.deposit(500);
ownerC.checkBalance();
ownerD.withdraw(200);
ownerD.checkBalance();
ownerD.withdraw(200);
ownerD.checkBalance();
ownerD.withdraw(200);
ownerD.checkBalance();
ownerD.withdraw(200);
ownerD.checkBalance();
ownerD.withdraw(200);
ownerD.checkBalance();