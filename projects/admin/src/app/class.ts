export class BlogCategory {
    Id?: string;
    Name?: string;
    Description?: string;
    Status?: number;
  }
  
  export class Blog {
    Id?: string;
    Name?: string;
    Author?: string;
    Content?: string;
    Thumbnail?: string;
    file?:File;
    CreatedDate?: Date;
    Status?: number;
    BlogCategoryId?: string;
  }
  
  export class Account {
    Id?: string;
    Permission?: string;
    Username?: string;
    Password?: string;
    AccessFailedCount?: number;
    Status?: number;
    LockTime?: Date;
    PhoneConfirmed?: boolean;
    lastupdate?: Date;
  }
  
  export class Customer {
    Id?: string;
    FirstName?: string;
    LastName?: string;
    Phonenumber?: string;
    Address?: string;
    Email?: string;
    Sex?: string;
    file?:File;
    Image?: string;
    Status?: number;
    AccountId?: string;
  }
  
  export class CustomerLocation {
    Id?: string;
    Latitude?: number;
    Longitude?: number;
    LocationAddress?: string;
    CustomerId?: string;
  }
  
  export class Freelancer {
    Id?: string;
    FirstName?: string;
    LastName?: string;
    Phonenumber?: string;
    Email?: string;
    Sex?: string;
    file?:File;
    Address?: string;
    Longitude?: number;
    Latitude?: number;
    MaxDistance?: number;
    totalIncome?: number;
    currentIncome?: number;
    Image?: string;
    AccountId?: number;
  }
  
  export class Location {
    Id?: string;
    customerId?: string;
    Longitude?: number;
    Latitude?: number;
    Address?: string;
    Name?: string;
  }
  
  export class Pet {
    Id?: string;
    Name?: string;
    Weight?: number;
    Birthday?: Date;
    Image?: string;
    Specices?: string;
    Breed?: string;
    Sex?: string;
    HealthNote?: string;
    Status?: number;
    Customerid?: string;
  }
  
  export class Service {
    Id?: string;
    Name?: string;
    Description?: string;
    Price?: number;
    Status?: number;
  }
  
  export class Bill {
    Id?: string;
    BillDate?: Date;
    FreeLancer?: string;
    Customer?: string;
    TotalPaid?: number;
    Status?: number;
  }
  
  export class BillDetail {
    Id?: string;
    Quantity?: number;
    UnitPrice?: number;
    GrandPaid?: number;
    ServiceId?: string;
    BillId?: string;
  }
  
  export class Booking {
    Id?: string;
    BookingTime?: Date;
    StartedLongitude?: number;
    StartedLatitude?: number;
    EndedLongitude?: number;
    EndedLatitude?: number;
    Duration?: number;
    PetId?: string;
    BillDetailId?: string;
    Status?: number;
  }
  
  export class Actions {
    Id?: string;
    Name?: string;
    AvailableTimeToRequest?: number;
    file?:File;
    icon?: string;
  }
  
  export class BookingAction {
    BookingId?: string;
    ActionId?: string;
    ActionName?: string;
    RequestedTime?: number;
    executedActionLatitude?: number;
    executedActionEndedLongitude?: number;
    Status?: number;
  }
  
  export class Employee {
    Id?: string;
    FirstName?: string;
    LastName?: string;
    Phonenumber?: string;
    Address?: string;
    Email?: string;
    Birthday?: Date;
    IdentityCardNumber?: string;
    Sex?: string;
    Status?: number;
    AccountId?: string;
  }
  
  export class AvailableTime {
    Id?: string;
    StartTime?: Date;
    EndTime?: Date;
    AvailableHourTime?: Date;
    FreelancerId?: string;
    Status?: number;
  }
  
  export class Conversation {
    Id?: string;
    RoomId?: string;
    Message?: string;
    SenderId?: string;
    ReceiverId?: string;
    OrderId?: string;
    TimeSent?: Date;
  }
  
  export class FreelancerFeedback {
    Id?: string;
    FreelancerId?: string;
    CustomerId?: string;
    Feedback?: string;
    StarRating?: number;
  }
  
  export class FreelancerService {
    FreelancerId?: string;
    ServiceId?: string;
    HourlyPrice?: number;
  }
  export interface login{
    username: string;
    password:string;
}