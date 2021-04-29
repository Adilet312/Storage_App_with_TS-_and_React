type Customer = {
  fullName: string;
  phoneNumber: string;
  accountBalance: number;
}

export enum UnitType{ STANDARD = 'STANDARD', HUMID_CONTROL = 'HUMID_CONTROL', TEMP_CONTOL = 'TEMP_CONTOL' }

export default class StorageUnit{
  private width:number;
  private height: number;
  private length: number;
  private price : number;
  private type: UnitType;
  private customer?: Customer| null;
  private date?: Date | null;

  constructor(width: number, height: number, length: number, price: number, type: UnitType, customer:Customer | null, date:Date | null){
    this.width = width;
    this.height = height;
    this.length = length;
    this.price = price;
    this.type = type;
    if(customer!==null){
      this.customer = customer;
      this.date = date;
    }else{
      this.customer = null;
      this.date = null;
    }

  }

  rentStorageUnit(customer:any,rentedDate:Date):void{
    this.customer = customer;
    this.date = rentedDate;
  }

  releaseStorageUnit():void{
    this.customer = null;
    this.date = null;
  }
  isRented():boolean{
    return this.customer!==null ? true : false;
  }
  setWidth(givenWidth:number):void{
    this.width = givenWidth;
  }

  setLength(givenLength:number):void{
    this.length = givenLength
  }

  setHeight(givenHeight:number):void{
    this.height = givenHeight;
  }

  setPrice(givenPrice:number):void{
    this.price = givenPrice;
  }

  setCustomer(newCustomer:Customer):void{
    this.customer = newCustomer;
  }

  setUnitType(unitType:UnitType):void{
    this.type = unitType;
  }

  setDate(date:Date): void{
    this.date = date;
  }

  getWidth():number{
    return this.width;
  }

  getHeight(): number{
    return this.height;
  }

  getLength(): number{
    return this.length;
  }

  getPrice(): number{
    return this.price;
  }

  getCustomer(): any{
    if(this.customer===null){
      return null;
    }
    return this.customer;
  }

  getUnitType(): UnitType{
    return this.type;
  }

  getDate(): Date | any{
    if(this.date===null){
      return null;
    }
    return this.date;
  }

  toString():string{
    let description = "";
    description += "Type of Storage Unit: " + this.getUnitType() + ",";
    description += "Dimensions of Storage Unit (WxLxH): " + this.getWidth() + " x " + this.getLength() + " x " + this.getHeight() + ",";
    description += "Price of Storage Unit: $"+this.getPrice() + ",";
    if (this.customer != null){
        description += "Storage Unit Rented by: "+ this.getCustomer().getFullName() + ",";
        description += "Starting Rental Date: " + this.getDate().toDateString();
    }
    else {
        description += "Storage Unit is Unrented";
    }
    return description;
  }
}
