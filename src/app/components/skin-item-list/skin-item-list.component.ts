import { Component, OnInit } from '@angular/core';
import { SkinItem } from '../../models/SkinItem';

@Component({
  selector: 'app-skin-item-list',
  templateUrl: './skin-item-list.component.html',
  styleUrls: ['./skin-item-list.component.scss']
})
export class SkinItemListComponent implements OnInit {
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
      name: 'skin1',
      price: 40,
     },{
      id: 4,
      name: 'skin2',
      price: 50,
     },    {    
      id: 5,
      name: 'skin1',
      price: 40,
     },{
      id: 6,
      name: 'skin2',
      price: 50,
     },    {    
      id: 7,
      name: 'skin1',
      price: 40,
     },{
      id: 8,
      name: 'skin2',
      price: 50,
     },    {    
      id: 9,
      name: 'skin1',
      price: 40,
     },{
      id: 10,
      name: 'skin2',
      price: 50,
     },    {    
      id: 11,
      name: 'skin1',
      price: 40,
     },{
      id: 12,
      name: 'skin2',
      price: 50,
     },    {    
      id: 13,
      name: 'skin1',
      price: 40,
     },{
      id: 14,
      name: 'skin2',
      price: 50,
     }
  ];


  constructor() { }

  ngOnInit() {
  }

}
