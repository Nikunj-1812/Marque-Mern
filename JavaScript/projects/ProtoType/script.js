// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     study() {
//         console.log(this.name + " is studying");
//     }
// }


// const s1 = new Student("Nikunj", 20);

// console.log(Student.prototype);                 
// console.log(Object.getPrototypeOf(s1));         
// console.log(s1.__proto__);                      

// console.log(Student.prototype === s1.__proto__); 

// s1.study();

// //-> reverse prototype

// class ReverseString {
//     constructor(str) {
//         this.str = str;
//     }

//     reverse() {
//         return this.str.split("").reverse().join("");
//     }
// }

// const obj = new ReverseString("Niki");

// class TransformString {
//     constructor(str) {
//         this.str = str;
//     }

//     transform() {
//         return this.str.split("").join("*");
//     }
// }

// const obj = new TransformString("Niki");

// console.log(obj.transform()); // N*i*k*i

// console.log(obj.reverse());

// console.log(obj.__proto__);
// console.log(ReverseString.prototype);

// console.log(obj.__proto__ === ReverseString.prototype); 
// console.log(obj.constructor === ReverseString);  

// //class prototype

// class Student {
//     hello() {
//         console.log("Hello");
//     }
// }

// const s1 = new Student();

// console.log(s1.constructor);               
// console.log(s1.__proto__);               

// console.log(s1.constructor === Student);     
// console.log(s1.__proto__ === Student.prototype); 

// str .__proto__. reverse = function(){
// return this.split("").reverse().join("");
// }
// console.log("Nikunj".reverse());

// str .__proto__. transform = function (separator){
// return this.split("").join(separator);
// }
// console.log("nikkii".transform("#"));

// class Bank {
//   // Private Properties and Methods
//   #percentageInProfit = 1.5;
//   #calculatePercentage() {
//     console.log(
//       `Your income will be calculated by ${this.#percentageInProfit} * ${this.balance}`
//     );
//   }
//   // Private Properties and Methods

//   static bankCode = 'CBIN0078';
//   static getBankCode() {
//     return `Bank Code: ${this.bankCode}`;
//   }

//   constructor(name, mobile, email, amount = 0) {
//     this.__accountHolderName = name;
//     this.mobile = mobile;
//     this._email = email;
//     this.balance = amount;
//   }

//   set email(emailvalue) {
//     this._email = emailvalue;
//   }

//   get email() {
//     return this._email;
//   }

//   deposit(amount) {
//     this.balance += Number(amount);
//     console.log(
//       `Amount of Rs. ${amount} is Deposited by ${this.__accountHolderName}`
//     );
//     console.log(Object());

//     Object().__proto__.sendDepositEmail.call(this, 9000);
//   }
//   checkBalance() {
//     console.log(`Your balance is ${this.balance}`);
//   }
//   withdraw(amount) {
//     if (amount !== undefined && amount !== 0) {
//       if (this.balance <= 0 || this.balance < amount) {
//         console.log('Insufficient Balance');
//         // console.log(InsufficientFundEmail.call(this, amount));
//       } else {
//         this.balance -= amount;
//         console.log(`Amount Withdrawn : Rs ${amount}`);
//         console.log(this);

//         let sendEmail = sendWithdrawEmail.bind(
//           this,
//           amount,
//           this.__accountHolderName
//         );
//         console.log(sendEmail());
//       }
//     } else {
//       console.log(`Please Enter amount to Withdraw(----AMOUNT-----)`);
//     }
//   }
//   getPercentage() {
//     console.log(`The Percetage is ${this.#percentageInProfit}`);
//     this.#calculatePercentage();
//   }
//   checkBankProfile() {
//     const { _accountHolderName, mobile, email, balance } = this;
//     console.log(`Account Holder = ${_accountHolderName} `);
//     console.log(`Mobile no. = ${mobile}`);
//     console.log(`Email = ${email}`);
//     console.log(`Account Balance = ${Number(balance)}`);
//   }
// }

// Object().__proto__.sendDepositEmail = function (amount) {
//   return `To ${this.accountHolderName},
//     This is to inform you that amount of Rs.${amount} is deposited`;
// };

// function sendWithdrawEmail(amount, name) {
//   return `To ${name},
//     This is to inform you that amount of Rs.${amount} is withdrawn | Available Balance is ${this.balance}`;
// }

// function InsufficientFundEmail(amount) {
//   return `To ${this.accountHolderName},
//     You're trying to withdraw Balance then available Rs .${amount}`;
// }

// let obj1 = new Bank('Raj', '5959561000', 'raj45@gmail.com', 522000);

// obj1.deposit(9000);
// console.log('Calling');

// console.log(Object().__proto__.sendDepositEmail.call(obj1, 90000));

Object().__proto__.sendDepositEmail = function (amount) {
  console.log(`To ${this.__accountHolderName} Laxman,
    This is to inform you that amount of Rs.${amount} is deposited`);
};

class Bank {
  // Private Properties and Methods
  #percentageInProfit = 1.5;
  #calculatePercentage() {
    console.log(
      `Your income will be calculated by ${this.#percentageInProfit} * ${this.balance}`
    );
  }
  // Private Properties and Methods

  static bankCode = 'CBIN0078';
  static getBankCode() {
    return `Bank Code: ${this.bankCode}`;
  }

  constructor(name, mobile, email, amount = 0) {
    this.__accountHolderName = name;
    this.mobile = mobile;
    this._email = email;
    this.balance = amount;
  }

  set email(emailvalue) {
    this._email = emailvalue;
  }

  get email() {
    return this._email;
  }

  deposit(amount) {
    this.balance += Number(amount);

    console.log(
      `Amount of Rs. ${amount} is Deposited by ${this.__accountHolderName}`
    );
  }
  checkBalance() {
    console.log(`Your balance is ${this.balance}`);
  }
  withdraw(amount) {
    if (amount !== undefined && amount !== 0) {
      if (this.balance <= 0 || this.balance < amount) {
        console.log('Insufficient Balance');
        // console.log(InsufficientFundEmail.call(this, amount));
      } else {
        this.balance -= amount;
        console.log(`Amount Withdrawn : Rs ${amount}`);
        console.log(this);

        let sendEmail = sendWithdrawEmail.bind(
          this,
          amount,
          this.__accountHolderName
        );
        console.log(sendEmail());
      }
    } else {
      console.log(`Please Enter amount to Withdraw(----AMOUNT-----)`);
    }
  }
  getPercentage() {
    console.log(`The Percetage is ${this.#percentageInProfit}`);
    this.#calculatePercentage();
  }
  checkBankProfile() {
    const { _accountHolderName, mobile, email, balance } = this;
    console.log(`Account Holder = ${_accountHolderName} `);
    console.log(`Mobile no. = ${mobile}`);
    console.log(`Email = ${email}`);
    console.log(`Account Balance = ${Number(balance)}`);
  }
}

function sendWithdrawEmail(amount, name) {
  return `To ${name},
    This is to inform you that amount of Rs.${amount} is withdrawn | Available Balance is ${this.balance}`;
}

function InsufficientFundEmail(amount) {
  return `To ${this.accountHolderName},
    You're trying to withdraw Balance then available Rs .${amount}`;
}

let obj1 = new Bank('Raj', '5959561000', 'raj45@gmail.com', 522000);

obj1.deposit(9000);
Object().__proto__.sendDepositEmail.call(obj1, 9000);

Object().__proto__.sendWithdrawEmail = function (amount, name) {
  return `To ${name},
    This is to inform you that amount of Rs.${amount} is withdrawn | Available Balance is ${this.balance}`;
}

Object().__proto__.InsufficientFundEmail = function (amount) {
  return `To ${this.accountHolderName},
    You're trying to withdraw Balance then available Rs .${amount}`;
}