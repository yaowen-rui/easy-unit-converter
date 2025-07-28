import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-NotFound',
  imports:[NzButtonModule, NzResultModule],
  templateUrl: './NotFound.component.html',
  styleUrls: ['./NotFound.component.less']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
