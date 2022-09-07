import { Component, OnInit } from '@angular/core';
import { AuthtenticationService } from 'src/app/services/authtentication.service';
import { faBars, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faBars = faBars
  logout = faArrowRightFromBracket

  constructor(
    public authService: AuthtenticationService
  ) { }

  ngOnInit(): void {
  }

}
