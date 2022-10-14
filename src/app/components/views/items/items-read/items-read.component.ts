import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items, Pages } from '../items.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-read',
  templateUrl: './items-read.component.html',
  styleUrls: ['./items-read.component.css']
})
export class ItemsReadComponent implements OnInit {

  items : Items[] = [];

  page = {} as Pages;

  displayedColumns: string[] = ['id', 'itemName', 'itemType', 'requiredLevel', 'damage', 'actions'];

  constructor(private service: ItemsService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.items = resposta.content;
      console.log(this.items);
    });
  }

  navigateToItemCreate(): void {
    this.router.navigate(["items/create"]);
  }

}
