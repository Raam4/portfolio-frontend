import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { faSquare, faTerminal, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { TokenService } from '../../services/token.service';
import { MenuItem } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MenubarComponent implements OnInit {

  faSquare = faSquare;
  faTerminal = faTerminal;
  faEnvelope = faEnvelope;
  faLinkedIn = faLinkedin;
  faGithub = faGithub;
  faWhatsapp = faWhatsapp;

  $person: Observable<Person>;
  items: MenuItem[];
  isAdmin = false;

  constructor(
    private tokenService: TokenService,
    private apiService: ApiService
    ){}

  ngOnInit(): void {

    this.$person = this.apiService.getData();

    this.isAdmin = this.tokenService.isAdmin();

    this.items=[
      {
        label: 'Home',
        routerLink: '/home'
      },
      {
        label: 'Experience',
        routerLink: '/experience'
      },
      {
        label: 'Education',
        routerLink: '/education'
      },
      {
        label: 'Projects',
        routerLink: '/projects'
      },
      {
        label: 'Skills',
        routerLink: '/skills'
      }
    ];
  }

  isLogged(){
    return this.tokenService.isLogged();
  }

  logOut(): void{
    this.tokenService.logOut();
    this.isLogged();
  }
}