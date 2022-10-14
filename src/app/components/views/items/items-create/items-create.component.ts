import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombatType } from '../../jobs/jobs.model';
import { hpDice } from '../../races/races.model';
import { Items } from '../items.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-create',
  templateUrl: './items-create.component.html',
  styleUrls: ['./items-create.component.css']
})
export class ItemsCreateComponent implements OnInit {

  item: Items = {
    itemName: '',
    itemType: '',
    requiredLevel: '',
    damage: ''
  }

  selectedValueItem: String | undefined;

  damages: hpDice[] = [
    {value: 'D4', viewValue: 'D4'},
    {value: 'D6', viewValue: 'D6'},
    {value: 'D8', viewValue: 'D8'},
    {value: 'D10', viewValue: 'D10'},
    {value: 'D12', viewValue: 'D12'},
    {value: 'D20', viewValue: 'D20'},
  ]

  selectedValueType: String | undefined;

  combatTypes: CombatType[] = [
    {value: 'MELEE', viewValue: 'Melee'},
    {value: 'RANGED', viewValue: 'Ranged'},
  ]

  constructor(private service: ItemsService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.item).subscribe(resposta => {
      this.router.navigate(['items']);
      this.service.message('Item created successfully!');
    }, err => {
      this.service.message('Item already registered!')
    })
  }

  cancel(): void {
    this.router.navigate(['items']);
  }

}
