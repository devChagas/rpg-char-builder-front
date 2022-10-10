import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { find } from 'rxjs';
import { CombatType, Jobs } from '../jobs.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs-delete',
  templateUrl: './jobs-delete.component.html',
  styleUrls: ['./jobs-delete.component.css']
})
export class JobsDeleteComponent implements OnInit {

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

  constructor(private service: JobsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.job.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.job.id!).subscribe(resposta => {
      this.job = resposta;
    });
  }

  delete(): void {
    this.service.delete(this.job.id!).subscribe(resposta => {
      this.service.message('Job deleted successfully!');
      this.router.navigate(['jobs']);
    }, err => {
      this.service.message('Job deleted successfully!');
      this.router.navigate(['jobs']);
    });
  }

  cancel(): void {
    this.router.navigate(['jobs']);
  }

}
