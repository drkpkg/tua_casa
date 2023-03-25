import {Injectable} from '@angular/core';
import {AuthChangeEvent, AuthSession, createClient, Session, SupabaseClient, User,} from '@supabase/supabase-js'
import {environment} from 'src/enviroments/environment';
import * as moment from "moment";

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  get session() {
    this.supabase.auth.getSession().then(({data}) => {
      this._session = data.session
    })
    return this._session
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({email: email, password: password})
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update)
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }

  // Methods

  async countries() {
    const {data, error} = await this.supabase.from('countries').select('*');
    return {data, error};
  }

  async createUser(email: string, password: string) {
    const {data, error} = await this.supabase.auth.signUp({email, password});
    return {data, error};
  }

  async getUsers() {
    const {data, error} = await this.supabase.from('user_list').select('*');
    return {data, error};
  }

  async signInWithToken(token: any) {
    const {data, error} = await this.supabase.auth.refreshSession()
    return {data, error};
  }

  async getCustomerView(condition: any) {
    const {data, error} = await this.supabase.from('customer_view').select('*').match(condition);
    return {data, error};
  }

  async createCountry(name: string) {
    const {data, error} = await this.supabase.from('countries').insert([
      {name: name, active: true}
    ]);
    return {data, error};
  }

  country(countryId: number) {
    return this.supabase.from('countries').select('*').eq('id', countryId);
  }

  async getFlightStaffView() {
    const {data, error} = await this.supabase.from('flight_staff_view').select('*');
    return {data, error};
  }

  async createFlightStaff(name: string, surname: string, lastname: string, identity_document: string, occupation_id: number, flight_license: string, active: boolean) {
    const {data, error} = await this.supabase.rpc('create_flight_staff', {
      name: name,
      surname: surname,
      lastname: lastname,
      identity_document: identity_document,
      occupation_id: occupation_id,
      flight_license: flight_license,
      active: active
    });
    return {data, error};
  }

  async getStaffView() {
    const {data, error} = await this.supabase.from('staff_view').select('*');
    return {data, error};
  }

  async createStaff(name: string, surname: string, lastname: string, identity_document: string, occupation_id: number, active: boolean) {
    const {data, error} = await this.supabase.rpc('create_staff', {
      name: name,
      surname: surname,
      lastname: lastname,
      identity_document: identity_document,
      occupation_id: occupation_id,
      active: active
    });
    return {data, error};
  }

  async getReceptionistView() {
    const {data, error} = await this.supabase.from('receptionist_view').select('*');
    return {data, error};
  }

  async createReceptionist(name: string, surname: string, lastname: string, identity_document: string, occupation_id: number, active: boolean) {
    const {data, error} = await this.supabase.rpc('create_receptionist', {
      name: name,
      surname: surname,
      lastname: lastname,
      identity_document: identity_document,
      occupation_id: occupation_id,
      active: active
    });
    return {data, error};
  }

  async createSale(customer_id: number, flight_id: number, passenger_data: any[], payment_method_id: number, unit_price: number) {
    const {data, error} = await this.supabase
      .rpc('create_flight_sale', {
        customer_id,
        flight_id,
        passenger_data,
        payment_method_id,
        unit_price,
      })
    return {data, error}
  }

  async sales() {
    const {data, error} = await this.supabase.from('sales')
      .select('id, date, unit_price, total_price, customer: customer_id (id, person: person_id (name, surname, lastname, identity_document)), flight: flight_id (id, code), payment_method: payment_method_id (id, name), created_at, updated_at')
    return {data, error};
  }

  async flights() {
    const {
      data,
      error
    } = await this.supabase.from('flights').select('id, code, arrival_date, departure_date, created_at, updated_at, vehicle_id, route_id, price')
    return {data, error};
  }

  async paymentMethods() {
    const {data, error} = await this.supabase.from('payment_methods').select('*')
    return {data, error};
  }

  async createCustomer(
    name: string,
    surname: string,
    lastname: string,
    identity_document: string,
    phone: string,
    email: string,
  ) {
    let {data, error} = await this.supabase
      .rpc('create_customer_person', {
        name: name,
        surname: surname,
        lastname: lastname,
        identity_document: identity_document,
        phone: phone,
        email: email,
      })
    return {data, error}
  }

  async deleteCustomer(id: number) {
    const {data, error} = await this.supabase.rpc('delete_customer_person', {
      customer_id: id,
    })
    return {data, error}
  }

  async getCustomerById(id: number) {
    const {data, error} = await this.supabase.from('customer_view').select('*').eq('id', id)
    return {data, error};
  }

  async getRentals() {
    const {
      data,
      error
    } = await this.supabase.from('rentals').select('id, start_date, end_date, amount, property: property_id (id, address, property_type, property_size, latitude, longitude, customer: customer_id (id, person: person_id (name, surname, lastname, identity_document))), created_at')
    return {data, error};
  }

  async getProperties() {
    const {
      data,
      error
    } = await this.supabase.from('properties').select('id, address, property_type, property_size, latitude, longitude, customer: customer_id (id, person: person_id (name, surname, lastname, identity_document))')
    return {data, error};
  }


  async createProperty(address: string, propertyType: string, propertySize: string, customerId: string, latitude: number, longitude: number) {
    const {data, error} = await this.supabase.from('properties').insert([
      {
        address: address,
        property_type: propertyType,
        property_size: propertySize,
        customer_id: customerId,
        latitude: latitude,
        longitude: longitude,
      }]);
    return {data, error};
  }

  async getProperty(id: number) {
    const {data, error} = await this.supabase.from('properties')
      .select('id, address, property_type, property_size, latitude, longitude, customer: customer_id (id, person: person_id (name, surname, lastname, identity_document))')
      .eq('id', id)
    return {data, error};
  }

  async getPropertyDocuments(id: number, modelName: string) {
    const {data, error} = await this.supabase.from('documents')
      .select('*').eq('model_id', id).eq('model_name', modelName)
    return {data, error};
  }

  async createDocument(id: number, modelName: string, documentFile: File) {
    const stringArr = [];
    for (let i = 0; i < 8; i++) {
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    const uuid = stringArr.join('-');
    const {data: storageData, error: storageError} = await this.supabase.storage.from('tuacasa-storage')
      .upload(`${modelName}/${id}/${uuid}/${documentFile.name}`, documentFile, {
        cacheControl: '3600',
        upsert: false,
      });
    if (storageError) {
      return {data: null, error: storageError};
    }
    // create document, storage returns the url
    const {data, error} = await this.supabase.from('documents').insert([
      {
        model_id: id,
        model_name: modelName,
        url: storageData?.path,
        uuid: uuid,
        filename: documentFile.name,
      }]);
    return {data, error};
  }

  async deleteDocument(id: number, modelId: number, modelName: string, uuid: string, filename: string) {
    const {data, error} = await this.supabase.from('documents').delete().eq('id', id);
    await this.supabase.storage.from('tuacasa-storage').remove([`${modelName}/${modelId}/${uuid}/${filename}`]);
    return {data, error};
  }

  async getPropertiesByCustomerId(id: number) {
    const {data, error} = await this.supabase.from('properties').select('*').eq('customer_id', id)
    return {data, error};
  }

  async updateProperty(id: number, address: string, propertyType: string, propertySize: string, latitude: number, longitude: number) {
    const {data, error} = await this.supabase.from('properties').update({
      address: address,
      property_type: propertyType,
      property_size: propertySize,
      latitude: latitude,
      longitude: longitude,
    }).eq('id', id);
    return {data, error};
  }

  async getRentalsByCustomerId(id: number) {
    const {data, error} = await this.supabase.from('rentals').select('*').eq('customer_id', id)
    return {data, error};
  }

  async getCustomerViewByCondition(condition: any[]) {
    const {data, error} = await this.supabase.from('customer_view').select('*').in('customer_type', condition)
    return {data, error};
  }

  async createRent(startDate: string, endDate: string, customerId: number, propertyId: number, amount: number) {
    const {data, error} = await this.supabase.from('rentals').insert([
      {
        start_date: startDate,
        end_date: endDate,
        customer_id: customerId,
        property_id: propertyId,
        amount: amount,
      }]);
    return {data, error};
  }

  async getRent(id: number) {
    /*
    start_date
    end_date
    amount
    property_id
    customer_id
    * */
    const {data, error} = await this.supabase
      .from('rentals')
      .select('id, start_date, end_date, amount, property: property_id (id, address, property_type, property_size, latitude, longitude, customer: customer_id (id, person: person_id (name, surname, lastname, identity_document))), created_at')
      .eq('id', id)
    return {data, error};
  }

  async registerPayment(amount: number, rentalId: number, customerId: number, paymentType: string) {
    // timestamp
    const {data, error} = await this.supabase.from('payments').insert([
      {
        amount: amount,
        rental_id: rentalId,
        customer_id: customerId,
        payment_type: paymentType,
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
      }
    ]);
    return {data, error};
  }

  async getVehiclesByCustomerId(id: number) {
    const {data, error} = await this.supabase
      .from('vehicles')
      .select('id, plate, color, created_at, brand: brand_id (id, name), description, customer_id')
      .eq('customer_id', id)
    return {data, error};
  }

  async getContractsByCustomerId(id: number) {
    const {data, error} = await this.supabase.from('contracts').select('*').eq('customer_id', id)
    return {data, error};
  }

  async getBrands() {
    const {data, error} = await this.supabase.from('brands').select('*')
    return {data, error};
  }

  async addVehicle(plate: string, color: string, brandId: number, description: string, customerId: number) {
    const {data, error} = await this.supabase.from('vehicles').insert([
      {
        plate: plate,
        color: color,
        brand_id: brandId,
        description: description,
        customer_id: customerId,
      }
    ]);
    return {data, error};
  }

  async getParkingSpaces() {
    const {
      data,
      error
    } = await this.supabase.from('parking_spaces').select('*').order('parking_floor', {ascending: true})
    return {data, error};
  }
}
