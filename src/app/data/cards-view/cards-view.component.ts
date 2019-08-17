import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { User } from '../../data/User';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {
  @Input() users: User[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getData();
  }

}
