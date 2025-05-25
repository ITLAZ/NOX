import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComentarioComponent } from '../../components/comentario/comentario.component';
import { register } from 'swiper/element/bundle';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';

register();

@Component({
  selector: 'app-lugares-card',
  templateUrl: './lugares-card.page.html',
  styleUrls: ['./lugares-card.page.scss'],
  standalone: false
})
export class LugaresCardPage implements OnInit {
  lugar: any;
  lugarId: string = '';
  menu: any[] = [];
  comentarios: any[] = [];

  constructor(
    private modalController: ModalController,
    private db: DatabaseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.lugarId = params['id'] || '';
      if (this.lugarId) {
        this.getLugar();
        this.getMenu();
        this.getComentarios();
      } else {
        console.warn('No se recibió un ID por queryParams');
      }
    });
  }

  getLugar() {
    this.db.getLugarPorId(this.lugarId).subscribe({
      next: (data) => {
        if (data) {
          this.lugar = data;
        } else {
          console.warn('Lugar no encontrado');
        }
      },
      error: (err) => {
        console.error('Error al obtener lugar:', err);
      }
    });
  }

  getMenu() {
    this.db.getSubcollection('locales', this.lugarId, 'menu').subscribe(data => {
      this.menu = data;
      console.log('Menú cargado:', this.menu);
    });
  }

  getComentarios() {
    this.db.getSubcollection('locales', this.lugarId, 'comentarios').subscribe(data => {
      this.comentarios = data;
      console.log('Comentarios cargados:', this.comentarios);
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ComentarioComponent,
      componentProps: {
        lugarId: this.lugarId, // Pasar el ID del lugar al componente
      },
      breakpoints: [0, 0.4],
      initialBreakpoint: 0.4,
      handle: true,
      cssClass: 'custom-modal',
    });

    await modal.present();
  }
}
