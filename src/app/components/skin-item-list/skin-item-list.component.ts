import { Component, OnInit } from '@angular/core';
import { SkinItem } from '../../models/SkinItem';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-skin-item-list',
  templateUrl: './skin-item-list.component.html',
  styleUrls: ['./skin-item-list.component.scss']
})
export class SkinItemListComponent implements OnInit {

  checkoutForm;

  skins:SkinItem[]= [
    {    
      id: 1,
      name: 'skin1',
      price: 40,
     },{
      id: 2,
      name: 'skin2',
      price: 50,
     },    {    
      id: 3,
      name: 'skin3',
      price: 40,
     }
  ];

//https://angular.io/start/start-forms
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
    url: ''
   
  });}

  ngOnInit() {
  }


  onSubmit(customerData) {
    // Process checkout data here
  //  this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
