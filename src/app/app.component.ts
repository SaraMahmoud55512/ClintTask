import { Component, OnInit } from '@angular/core';
import { user } from './users.module';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: user[];
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getusers();
  }
  getusers() {
    this.dataservice.getUsers().subscribe(
      (data:any)=>{
        console.log(data)
        this.users=data.data
      }
    );
    console.log(this.users)
  }
}
