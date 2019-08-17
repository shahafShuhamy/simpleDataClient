export class User {
    id: number;
    name: string;
    addressCity: string;
    addressStreet: string;
    streetNumber: number;
    address: string;
    getFormatedAddress(): string {
        return  `${this.addressCity}, ${this.addressStreet} ${this.streetNumber}`;
    }
    constructor(id, name, addressCity, addressStreet, streetNumber) {
        this.id = id;
        this.name = name;
        this.addressCity = addressCity;
        this.addressStreet = addressStreet;
        this.streetNumber = streetNumber;
        this.address = this.getFormatedAddress();
    }
}
