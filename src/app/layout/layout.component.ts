import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-layout',
  imports:[FooterComponent, HeaderComponent, SiderComponent, NzLayoutModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
