import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { CombatType, Jobs } from '../jobs.model';
import { JobsService } from '../jobs.service';


@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit {
  
  job: Jobs = {
    jobName: '',
    combatType: ''
  }

  selectedValue: String | undefined;

  combatTypes: CombatType[] = [
    {value: 'MELEE', viewValue: 'Melee'},
    {value: 'RANGED', viewValue: 'Ranged'},
  ]
  
  constructor(private service: JobsService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.job).subscribe(resposta => {
      this.router.navigate(['jobs']);
      this.service.message('Job created successfully!');
    }, err => {
      this.service.message('Job already registered!')
    })
  }

  cancel(): void {
    this.router.navigate(['jobs']);
  }

}
