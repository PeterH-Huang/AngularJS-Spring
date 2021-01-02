export class AddressEntry {
    public firstName: String;
    public lastName: String;
    public street?: String;
    public city?: String;
    public country?: String;
    public postal?: String;
    public phone?: String;
    public email?: String;
    public notes?: String;

constructor(firstName?: string, lastName?: string, street?: String, city?:String, country?:String, postal?:String, phone?: string, email?: string, notes?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.city = city;
    this.country = country;
    this.postal = postal;
    this.phone = phone;
    this.email = email;
    this.notes = notes;
}

}
