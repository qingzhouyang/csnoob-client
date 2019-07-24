import { Component, OnInit, Input } from '@angular/core';
import { SkinItem } from '../../models/SkinItem';

@Component({
  selector: 'app-skin-item',
  templateUrl: './skin-item.component.html',
  styleUrls: ['./skin-item.component.scss']
})
export class SkinItemComponent implements OnInit {
  @Input() skinItem: SkinItem

  constructor() { }

  ngOnInit() {
  }

}
