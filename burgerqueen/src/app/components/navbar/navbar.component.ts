import { Component, OnInit } from '@angular/core';
import { AuthtenticationService } from 'src/app/services/authtentication.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { faBars, faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faBars = faBars
  user = faUser
  logout = faArrowRightFromBracket
  userUid = this.authService.userData.uid
  username:any
  role:any
  userData = this.fireService.getUserByUid(this.userUid).subscribe((res:any)=> {
    this.username = res.username;
    this.role = res.role;
  })
  
  constructor(
    public fireService: FirestoreService,
    public authService: AuthtenticationService
  ) {}

  ngOnInit(): void { }

}
