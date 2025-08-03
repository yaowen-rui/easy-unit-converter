import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALL_UNITS } from '../data/all-units';
import { Unit } from '../models/unit.model';
import { CommonModule } from '@angular/common';
import { ConversionRow, UnitDetailTable } from '../models/unit-detail.model';
import { ALL_UNIT_TABLES } from '../data/all-unit-tables';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-unitDetail',
  imports:[CommonModule, FormsModule, NzButtonModule, NzIconModule],
  templateUrl: './unitDetail.component.html',
  styleUrls: ['./unitDetail.component.less']
})
export class UnitDetailComponent implements OnInit {
  //singleUnit: Unit | undefined;
  detail !: UnitDetailTable;
  activeRowId !: string;//currently editable row

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //It reads the id from the URL parameter (from /sider/unit/:id).
    //Finds the corresponding unit from ALL_UNITS based on the ID.
    //Sets the unit property so the template can display details for the selected unit.
    this.route.paramMap.subscribe(params => {
      const id=params.get('id')!;
      //this.singleUnit = ALL_UNITS.find(u => u.id===id)!;
      this.detail = ALL_UNIT_TABLES.find(t => t.id=== id)!;//find table data for this unit
      this.activeRowId = this.detail.rows[0].id;//default the active input row
    })
  }

  onInputChange(row: ConversionRow) {
    const base = row.value * row.toBaseFactor;
    this.detail.rows.forEach(r => {
      if (r.id !== row.id) {
        //special handling for temperature and base units
        r.value = parseFloat((base / r.toBaseFactor).toFixed(6));
      }
    });
  }


}
