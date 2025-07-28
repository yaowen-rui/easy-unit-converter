import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALL_UNITS } from '../data/all-units';
import { Unit } from '../models/unit.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-unitDetail',
  imports:[CommonModule],
  templateUrl: './unitDetail.component.html',
  styleUrls: ['./unitDetail.component.css']
})
export class UnitDetailComponent implements OnInit {
  unit: Unit | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id=params.get('id')
      this.unit = ALL_UNITS.find(u => u.id===id)
    })
  }


}
