import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
  standalone: false
})
export class LugaresPage implements OnInit {
  locales: any[] = [];
  isLoading = true;

  constructor(private db: DatabaseService, private router: Router) {}


ngOnInit() {
  this.db.getLocales().subscribe(data => {
    this.locales = data;
    this.isLoading = false;
  });
}

  irALocal(local: any) {
    this.router.navigate(['/lugares-card'], {
      queryParams: { id: local.id }
    });
  }
}