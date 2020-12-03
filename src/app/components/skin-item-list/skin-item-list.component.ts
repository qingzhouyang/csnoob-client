import { Component,Inject, OnInit } from '@angular/core';
import { SkinItem } from '../../models/SkinItem';
import { FormBuilder } from '@angular/forms';
import { SkinService } from '../../services/skin.service';

@Component({
  selector: 'app-skin-item-list',
  templateUrl: './skin-item-list.component.html',
  styleUrls: ['./skin-item-list.component.scss']
})
export class SkinItemListComponent implements OnInit {

  urlForm;

  skins: SkinItem[] = [
    {
      id: 1,
      name: 'skin1',
      price: 40,
      url: '1111'
    }, {
      id: 2,
      name: 'skin2',
      price: 50,
      url: '1111'
    }, {
      id: 3,
      name: 'skin3',
      price: 40,
      url: '1111'
    }
  ];

  //https://angular.io/start/start-forms
  constructor(
    private formBuilder: FormBuilder,
    @Inject(SkinService) private skinService: SkinService
  ) {
    this.urlForm = this.formBuilder.group({
      url: ''

    });
  }

  ngOnInit() {
    // this.skinService.getSkins().subscribe(dbSkins =>{
    //   this.skins = dbSkins
    // })
  }


  onSubmit(url) {
    // Process checkout data here
    //  this.items = this.cartService.clearCart();
    this.urlForm.reset();

    //       need to change id
    const newItem = {
      id: this.skins.length,
      name: 'skin' + this.skins.length,
      price: 40,
      url: url
    }
    console.warn('url', url);

    this.skinService.addSkin(newItem).subscribe((newItem) => {
      this.skins.push(newItem)
    })

  }

  onDeleted(id: number) {
    this.skins = this.skins.filter((element) => {
      console.log(id)
      return element.id !== id
    })
    this.skinService.deleteSkin(id).subscribe()
  }

}
