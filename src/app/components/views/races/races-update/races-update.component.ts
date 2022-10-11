import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hpDice, Races } from '../races.model';
import { RacesService } from '../races.service';

@Component({
  selector: 'app-races-update',
  templateUrl: './races-update.component.html',
  styleUrls: ['./races-update.component.css']
})
export class RacesUpdateComponent implements OnInit {

  race: Races = {
    id: '',
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

  constructor(private service: RacesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.race.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.race.id!).subscribe(resposta => {
      this.race = resposta;
    });
  }

  update(): void {
    this.service.update(this.race).subscribe(resposta => {
      this.router.navigate(['races']);
      this.service.message("Race updated successfully!");
    },  err => {
      this.router.navigate(['races']);
      this.service.message("Internal Error Server, please try again later!");
    });
  }

  cancel(): void {
    this.router.navigate(['races']);
  }

}
