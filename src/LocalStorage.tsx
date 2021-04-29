import  StorageUnit from './StorageUnit';
import Customer from './Customer';
import { UnitType } from './StorageUnit'
type StorageUnitType = typeof StorageUnit
export default class LocalStorage{
  private storageUnits: StorageUnit[][];
  private customers: Customer[];
  constructor(){
    this.storageUnits = [];
    this.customers = []
    for( let outer = 0; outer < 15; outer++){
      this.storageUnits[outer] = []
      if(outer < 5){
        for(let inner = 0; inner <5; inner++){
          this.storageUnits[outer][inner] = new StorageUnit(2,3,4,100, UnitType.STANDARD,null,null)
        }
      }else if(outer >= 5 && outer <10){
        for(let inner = 0; inner <5; inner++){
          this.storageUnits[outer][inner] = new StorageUnit(2,3,4,200, UnitType.HUMID_CONTROL,null,null)
        }
      }else{
        for(let inner = 0; inner <5; inner++){
          this.storageUnits[outer][inner] = new StorageUnit(2,3,4,300, UnitType.TEMP_CONTOL,null,null)
        }
      }

    }
  }
  getEmptyStorageUnitsByType(givenType: UnitType):Array<StorageUnit>{
    const numberOfUnits = [];
    for( let row = 0; row < this.storageUnits.length; row++){
      for(let col =0; col < this.storageUnits[0].length; col++){
        if(givenType===this.storageUnits[row][col].getUnitType() && this.storageUnits[row][col].getCustomer()===null){
          numberOfUnits.push(this.storageUnits[row][col])
        }
      }
    }
    return numberOfUnits;
  }
  chargeMonthlyRent():void{
    for( let row = 0; row < this.storageUnits.length; row++){
      for(let col =0; col < this.storageUnits[0].length; col++){
        if(this.storageUnits[row][col].getCustomer()!==null){
            let rent_amount =  this.storageUnits[row][col].getPrice()
            this.storageUnits[row][col].getCustomer().payBalance(rent_amount);
        }
      }
    }
  }
  getNumberOfUnitsForCustomer(given_customer: Customer):Array<StorageUnit>{
    const numberOfUnits = [];
    for( let row = 0; row < this.storageUnits.length; row++){
      for(let col =0; col < this.storageUnits[0].length; col++){
        if(given_customer===this.storageUnits[row][col].getCustomer()){
          numberOfUnits.push(this.storageUnits[row][col])
        }
      }
    }
    return numberOfUnits;
  }
  getUnitByIndex(rowIdx:number, colIdx:number):StorageUnit{
    return this.storageUnits[rowIdx][colIdx];
  }

  findAllStorageUnits(): StorageUnit[][]{
    return this.storageUnits;
  }

  findAllRentedStorageUnits(): Array<StorageUnit>{
    const rentedStorageUnits = [];
    for( let row = 0; row < this.storageUnits.length; row++){
      for(let col =0; col < this.storageUnits[0].length; col++){
        if(this.storageUnits[row][col].isRented()){
            rentedStorageUnits.push(this.storageUnits[row][col])
        }
      }
    }
    return rentedStorageUnits;
  }

  findAllUnRentedStorageUnits(): Array<StorageUnit>{
    const rentedStorageUnits = [];
    for( let row = 0; row < this.storageUnits.length; row++){
      for(let col =0; col < this.storageUnits[0].length; col++){
        if(!this.storageUnits[row][col].isRented()){
            rentedStorageUnits.push(this.storageUnits[row][col])
        }
      }
    }
    return rentedStorageUnits;
  }

  findAllStorageUnitsByType(type: UnitType):Array<StorageUnit>{
    const storageUnitsByType = [];
    for( let row = 0; row < this.storageUnits.length; row++){
      for(let col =0; col < this.storageUnits[0].length; col++){
        if(this.storageUnits[row][col].getUnitType() === type){
            storageUnitsByType .push(this.storageUnits[row][col])
        }
      }
    }
    return storageUnitsByType ;
  }

}
