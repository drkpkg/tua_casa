export default class Customer { 
    id : number;
    email : string;
    phone : string;
    name : string;
    surname : string;
    lastname : string;
    identity_document : string;
    customer_type: number;

    constructor (){
        this.id = 0;
        this.email = '';
        this.phone = '';
        this.name = '';
        this.surname = '';
        this.lastname = '';
        this.identity_document = '';
        this.customer_type = 0;
    }

    static fromJson(json: any): Customer{
        let customer = new Customer();
        customer.id = json.id;
        customer.email = json.email;
        customer.phone = json.phone;
        customer.name = json.name;
        customer.surname = json.surname;
        customer.lastname = json.lastname;
        customer.identity_document = json.identity_document
        customer.customer_type = json.customer_type
        return customer
    }

    static fromJsonList(json: any[]): Customer[]{
        let customers: Customer[] = [];
        json.forEach((value) => {
        customers.push(Customer.fromJson(value));
        });
        return customers;
    }

    
    public get fullName() : string {
        return `${this.name} ${this.surname} ${this.lastname}`
    }
    
}