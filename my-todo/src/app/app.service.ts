import { Injectable } from '@angular/core';


@Injectable()
export class AppService {

    settings: Settings;
    addresses: Address[];

    constructor() {

    }

    saveSettings(settings: Settings) {
        var self = this;

        self.settings = settings;
    }

    getSettings() {
        var self = this;

        return self.settings;
    }


    saveAddress(address: Address) {
        if (!this.addresses) this.addresses = [];
        this.addresses.push(address);
    }

    removeAddress(id: string) {
        var self = this;
        for (var i = 0; i < self.addresses.length; i++) {
            var item = self.addresses[i];

            if (item.id == id) {
                self.addresses.splice(i, 1);
                break;
            }
        }
    }


    getAddresses() {
        var self = this;

        return self.addresses;
    }

}


export class Settings {
    name: string;
    email: string;
}


export class Address {
    id: string;
    location: string;
    city: string;
    postCode: string;
    mobile: string;
    phone: string;
    country: string;

    latitude:  number;
    longitude: number;

    displayValue: string;


    constructor() {
        this.id = this.newGuid();
    }


    newGuid() {
        var result, i, j;
        result = '';
        for (j = 0; j < 32; j++) {
            if (j == 8 || j == 12 || j == 16 || j == 20)
                result = result + '-';
            i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
            result = result + i;
        }
        return result;
    }
}