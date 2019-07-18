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
     }
  ];


  constructor() { }

  ngOnInit() {
  }

}
