import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CombatType, Jobs } from '../jobs.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs-update',
  templateUrl: './jobs-update.component.html',
  styleUrls: ['./jobs-update.component.css']
})
export class JobsUpdateComponent implements OnInit {

  job: Jobs = {
    id: '',
    jobName: '',
    combatType: ''
  }

  selectedValue: String | undefined;

  combatTypes: CombatType[] = [
    {value: 'MELEE', viewValue: 'Melee'},
    {value: 'RANGED', viewValue: 'Ranged'},
  ]

  constructor(private service: JobsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.job.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.job.id!).subscribe(resposta => {
      this.job = resposta;
    });
  }

  update(): void {
    this.service.update(this.job).subscribe(resposta => {
      this.router.navigate(['jobs']);
      this.service.message("Job updated successfully!");
    },  err => {
      this.router.navigate(['jobs']);
      this.service.message("Internal Error Server, please try again later!");
    });
  }

  cancel(): void {
    this.router.navigate(['jobs']);
  }

  
}
