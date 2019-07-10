import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'A part'
      },
      {
          label: 'B part'
      },
      {
        label: 'C part',
        items: [
            {label: 'sub part'},
            {label: 'sub part'}
        ]
    },
    {
      label: 'C part',
      items: [
          {label: 'sub part'},
          {label: 'sub part'}
      ]
  },
  ];
  }
}