import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  imports:[NzMenuModule,FormsModule,NzSwitchModule, NzFlexModule,CommonModule, NzIconModule],
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})

export class SiderComponent implements OnInit {
  theme:boolean = true;
  menus: Menu[]=[];
  contextMenuUnit:Unit | null = null;
  contextMenuPosition = { x: 0, y: 0 };
  private localStorageKey = 'favoriteUnitIds';


  constructor(private router:Router, private activeRoute: ActivatedRoute, private changeDetectorRef:ChangeDetectorRef) {
    //This constructor initializes the component and injects the Router and ActivatedRoute services.
    //It also sets up the initial state of the menus array

  }

  ngOnInit() {
    this.menus = MENUS//Loads MENU  when the sidebar is initialized.
    //this.menus = JSON.parse(JSON.stringify(MENUS)); // Deep clone to avoid reference issues
    this.readFromStorage();
    document.addEventListener('mousedown', this.handleDocumentClick, true);
  }

  ngOnDestroy() {
    document.removeEventListener('mousedown', this.handleDocumentClick, true);
  }

  selectUnit(unit:Unit) {
    //When a menu item is clicked, it uses the Router to navigate to a route like /sider/unit/:id
    this.router.navigate(['unit', unit.id], {relativeTo:this.activeRoute} )
  }

  onUnitRightClick(event: MouseEvent, unit: Unit) {
    event.preventDefault();
    this.contextMenuUnit = unit;
    this.contextMenuPosition = { x: event.clientX+2, y: event.clientY+2 };
  }

  closeContextMenu() {
    this.contextMenuUnit = null;
    this.changeDetectorRef.detectChanges(); // Explicitly trigger change detection, Ensure the view updates immediately
  }

  saveFavoriteToStorage(){
    const favoriteList = this.menus.find(m => m.title === 'Favorite');
    if (favoriteList) {
      //store an array of unit IDs in localStorage
      localStorage.setItem(this.localStorageKey, JSON.stringify(favoriteList.units.map(u => u.id)));
    }
  }

  addToFavorite(unit: Unit) {
    const favoriteList = this.menus.find(m=> m.title === 'Favorite')
    //Uses .some() to check if any unit in favoriteMenu.units has the same id as the one you want to add.
    //This prevents adding the same unit twice
    if(favoriteList && !favoriteList.units.some(u => u.id === unit.id)) {
      favoriteList.units.push(unit);
      unit.isFavorite = true;
      this.closeContextMenu();
      this.saveFavoriteToStorage();
    }
  }

  removeFromFavorite(unit: Unit) {
    const favoriteList = this.menus.find(m => m.title === 'Favorite')
    if (favoriteList) {
      //console.log("Removing unit from favorite: ", unit);
      favoriteList.units = favoriteList.units.filter(u => u.id !== unit.id);
      unit.isFavorite = false;
      this.closeContextMenu();
      this.saveFavoriteToStorage();
      this.changeDetectorRef.detectChanges(); // Ensure the view updates immediately
    }

  }

  private handleDocumentClick = (event: MouseEvent)=>{
    if(!this.contextMenuUnit) return;

    const target = event.target as HTMLElement;
    const menuEl = document.querySelector('.context-unit-menu');

    // only close if clicking outside menu
    if (menuEl && !menuEl.contains(target)) {
      this.closeContextMenu();
      //console.log("event target: "+event.target+", contextMenuUnit: "+this.contextMenuUnit);
    }

  };

  private readFromStorage() {
    const favoriteList = this.menus.find(m => m.title === 'Favorite');
    const allUnitsList = this.menus.find(m => m.title === 'All Units');
    const favoriteUnitIds = localStorage.getItem(this.localStorageKey);
    if(favoriteList && allUnitsList) {
      favoriteList.units = allUnitsList.units.filter(u=>favoriteUnitIds?.includes(u.id))
      allUnitsList.units.forEach(u=> u.isFavorite = favoriteUnitIds?.includes(u.id))
    }
  }

}
