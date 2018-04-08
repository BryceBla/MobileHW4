import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

    firstName: string;
    lastName: string;
    title;
    category;
    photo;
    price;
    description;

    constructor() {
        this.firstName = 'Blank';
        this.lastName = 'Name';
    }

    setUserName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getUserName() {
        return this.firstName + ' ' + this.lastName;
    }

}
