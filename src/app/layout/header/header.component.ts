import { Component, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-header',
  imports:[NzIconModule, NzModalModule, NzTooltipModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private modal: NzModalService) { }

  ngOnInit() {
  }
  popUpInfo() {
    this.modal.info({
      nzTitle: 'How to use Easy converter?',
      nzContent: '<p>You can use Easy Converter to perform common unit conversions. You can also right-click on unit to add or remove units from "Favorite".</p><p>some messages...some messages...</p>',
      nzOnOk: () => console.log('Info OK')
    });
  }
}
