import { Component, OnInit } from '@angular/core';
// Servicios
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((data) => {
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
