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

  asNumber = (v: unknown): number => {
    if (typeof v === 'number') return Number.isFinite(v) ? v : 0;
    if (typeof v === 'string') {
      const n = parseFloat(v.trim());
      return Number.isFinite(n) ? n : 0;
    }
    return 0;
  };

  onInputChange(row: ConversionRow) {
    const toBase = (r: ConversionRow, v: unknown): number => {
      if (typeof r.toBase === 'function') return r.toBase(v); // v can be string or number
      const scale = r.toBaseScale ?? r.toBaseFactor ?? 1;
      const offset = r.toBaseOffset ?? 0;
      return this.asNumber(v) * scale + offset;
    };

    const fromBase = (r: ConversionRow, b: number): number | string => {
      if (typeof r.fromBase === 'function') return r.fromBase(b);
      const scale = r.toBaseScale ?? r.toBaseFactor ?? 1;
      const offset = r.toBaseOffset ?? 0;
      const v = (b - offset) / scale;
      return Number.isFinite(v) ? Number(v.toFixed(6)) : '';
    };

    const baseVal = toBase(row, row.value);
    this.detail.rows.forEach(r => {
      if (r.id !== row.id) r.value = fromBase(r, baseVal) as any;
    });
  }

  deleteAllInputs(){
    this.detail.rows.forEach(r => {
      r.value = 0;
    });
    this.activeRowId = this.detail.rows[0].id; //reset active row to the first one
  }

}
