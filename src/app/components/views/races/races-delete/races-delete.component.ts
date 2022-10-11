import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hpDice, Races } from '../races.model';
import { RacesService } from '../races.service';

@Component({
  selector: 'app-races-delete',
  templateUrl: './races-delete.component.html',
  styleUrls: ['./races-delete.component.css']
})
export class RacesDeleteComponent implements OnInit {

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

  cancel(): void {
    this.router.navigate(['races']);
  }

  findById(): void {
    this.service.findById(this.race.id!).subscribe(resposta => {
      this.race = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.race.id!).subscribe(resposta => {
      this.service.message('Race deleted successfully!');
      this.router.navigate(['races']);
    }, err => {
      console.log(err);
      this.service.message('Internal Server Error, plese try again later!');
      this.router.navigate(['races']);
    });
  }

}
