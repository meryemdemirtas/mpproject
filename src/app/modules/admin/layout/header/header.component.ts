import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  constructor(private router: Router) { }
  username: string = "Meryem Demirtaş";
  email: string = "meryemdemirtas@outlook.com";
  userad:string='Kullanıcı Adı:';
  userEmail:string='Mail Adresiniz';
  userMenuOpened: boolean = false;

  openUserMenu() {
    this.userMenuOpened = true;
  }

  closeUserMenu() {
    this.userMenuOpened = false;
  }


  ngOnInit(): void {
  }
  logout() {
    // Çıkış yapma işlemleri burada gerçekleştirilebilir
    // Örneğin, kullanıcıyı login sayfasına yönlendirin
    this.router.navigate(['/login']);
  }
 
}
