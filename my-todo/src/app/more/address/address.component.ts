import { Component, OnInit } from '@angular/core';
import { Address, AppService } from 'src/app/app.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  model: Address;
  items: Address[] = [];
  isViewDetailMode: boolean = false;
  isCreateAddressMode: boolean = false;

  viewItem: Address;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.model = new Address();

    this.isCreateAddressMode = false;
    this.isViewDetailMode = false;

    this.loadList();
  }

  loadList() {
    this.items = this.appService.getAddresses();
  }

  add() {
    this.isCreateAddressMode = true;
  }

  reset() {
    this.model = new Address();

    this.isCreateAddressMode = false;
    this.isViewDetailMode = false;

    this.loadList();
  }

  save() {
    var self = this;

    self.model.displayValue = `${self.model.location}, ${self.model.city}, ${self.model.postCode}, ${self.model.country}, ${self.model.latitude}, ${self.model.longitude}`;

    self.appService.saveAddress(self.model);

    self.reset();
  }


  remove(id) {
    this.appService.removeAddress(id);

    this.reset();
  }

  viewDetail(address: Address) {
    this.isViewDetailMode = true;
    this.viewItem = address;
  }

}
