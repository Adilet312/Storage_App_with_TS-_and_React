export default class Customer{
  private fullName: string;
  private phoneNumber: string;
  private accountBalance: number;

  constructor(fullName:string, phoneNumber:string, accountBalance:number){
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.accountBalance = accountBalance;
  }

  getFullName():string{
    return this.fullName;
  }

  getPhoneNumber():string{
    return this.phoneNumber;
  }

  getAccountBalance():number{
    return this.accountBalance;
  }

  setFullName(givenName:string):void{
    this.fullName = givenName;
  }

  setPhoneNumber(givenNumber:string):void{
    this.phoneNumber = givenNumber;
  }

  setAccountBalance(givenAmount:number):void{
    if(!this.isValidAmount(givenAmount)){
      throw 'Amount is invalid!';
    }
    this.accountBalance = givenAmount;
  }

  payBalance(amount:number):void{
    if(amount > this.getAccountBalance()){
       throw 'Given amount is bigger than current balance!';
    }else if(!this.isValidAmount(amount)){
       throw 'Amount is invalid!';
    }
    let currentBalance = this.getAccountBalance() - amount;
    this.setAccountBalance(currentBalance)
  }

  depositBalance(amount:number):void{
    if(!this.isValidAmount(amount)){
       throw 'Amount is invalid!';
    }
    let currentBalance = this.getAccountBalance() + amount;
    this.setAccountBalance(currentBalance)
  }

  isValidAmount(amount:number):boolean{
    if(amount > 0){
      return true;
    }
    return false;
  }

  toString():string{
    let description = "";
    description += "Customer name: " + this.getFullName() + "\n";
    description += "Phone Number: " + this.getPhoneNumber() + "\n";
    description += "Account Balance: " + this.getAccountBalance() + "\n";
    description += "\n";
    return description;
  }
}
