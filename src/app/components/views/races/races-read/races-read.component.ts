import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Pages, Races } from '../races.model';
import { RacesService } from '../races.service';

@Component({
  selector: 'app-races-read',
  templateUrl: './races-read.component.html',
  styleUrls: ['./races-read.component.css']
})
export class RacesReadComponent implements OnInit {

  races: Races[] = [];

  page = {} as Pages;

  displayedColumns: string[] = ['id', 'raceName', 'hpDice', 'actions'];

  constructor(private service: RacesService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.races = resposta.content;
    });
  }

  navigateToRaceCreate(): void {
    this.router.navigate(["races/create"]);
  }

}
