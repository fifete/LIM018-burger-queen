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
  userUid = this.authService.userData.uid
  user:any
  userData = this.authService.getUserByUid(this.userUid).subscribe((res:any)=> {
    this.user = res.username
  })
  
  constructor(
    public authService: AuthtenticationService
  ) { console.log(this.userData) }

  ngOnInit(): void { }

}
