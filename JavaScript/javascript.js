function createBankAccount(accountHolder, mobile, email, initialBalance = 0) {
    let balance = initialBalance;

    return {
        accountHolder,mobile,email,
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
            }else {
                console.log("Insufficient Balance");
            }
        },
        checkBalance() {
            console.log(`Balance: ₹${balance}`);
        }
    };
}

const account = createBankAccount(
    "Nikunj",
    "9876543210",
    "nikunj@gmail.com",
    5000
);

account.deposit(1000);
account.checkBalance();