import { Component, OnInit } from '@angular/core';
import { MENUS } from '../../data/menus';
import { Unit } from '../../models/unit.model';
import { Menu } from '../../models/menu.model';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sider',
  standalone:true,
  imports:[NzMenuModule,FormsModule,NzSwitchModule, NzFlexModule, NzIconModule,CommonModule],
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})

export class SiderComponent implements OnInit {
  theme:boolean = true
  menus: Menu[]=[]

  constructor(private router:Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menus = MENUS
  }

  selectUnit(unit:Unit) {

    this.router.navigate(['unit', unit.id], {relativeTo:this.activeRoute} )

  }
}
