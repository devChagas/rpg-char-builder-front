import { Component, OnInit } from '@angular/core';
import { Jobs, Pages } from '../jobs.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs-read',
  templateUrl: './jobs-read.component.html',
  styleUrls: ['./jobs-read.component.css']
})
export class JobsReadComponent implements OnInit {

  jobs: Jobs[] = [];

  page = {} as Pages;

  displayedColumns: string[] = ['id', 'jobName', 'combatType', 'actions'];

  constructor(private service: JobsService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.jobs = resposta.content;
      console.log(this.jobs);
    });
  }
  

}
