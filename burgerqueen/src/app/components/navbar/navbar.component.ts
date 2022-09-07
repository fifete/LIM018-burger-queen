import { Component, OnInit } from '@angular/core';
import { AuthtenticationService } from 'src/app/services/authtentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService : AuthtenticationService
  ) { }

  ngOnInit(): void {
  }

}
