import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hpDice, Races } from '../races.model';
import { RacesService } from '../races.service';

@Component({
  selector: 'app-races-create',
  templateUrl: './races-create.component.html',
  styleUrls: ['./races-create.component.css']
})
export class RacesCreateComponent implements OnInit {

  race: Races = {
    raceName: '',
    hpDice: ''
  }

  selectedValue: String | undefined;

  hpDices: hpDice[] = [
    {value: 'D4', viewValue: 'D4'},
    {value: 'D6', viewValue: 'D6'},
    {value: 'D8', viewValue: 'D8'},
    {value: 'D10', viewValue: 'D10'},
    {value: 'D12', viewValue: 'D12'},
    {value: 'D20', viewValue: 'D20'},
  ]

  constructor(private service: RacesService, private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['races']);
  }

  create(): void {
    this.service.create(this.race).subscribe(resposta => {
      this.router.navigate(['races']);
      this.service.message('Race created successfully!');
    }, err => {
      this.service.message('Race already registered!')
    })
  }

}
