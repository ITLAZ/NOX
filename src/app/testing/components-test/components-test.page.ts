import { Component, OnInit, NgZone } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-components-test',
  templateUrl: './components-test.page.html',
  styleUrls: ['./components-test.page.scss'],
  standalone: false,
})
export class ComponentsTestPage implements OnInit {
  restaurante: any = null;
  menu: any[] = [];
  comentarios: any[] = [];

  constructor(private db: DatabaseService, private zone: NgZone) {}

  ngOnInit() {
    const localId = 'LOC-001';

    // Leer datos del restaurante
    this.db.getDocumentById('locales', localId).subscribe(data => {
      this.zone.run(() => {
        this.restaurante = data;
        console.log('Restaurante:', this.restaurante);
      });
    });

    // Leer subcolección menú
    this.db.getSubcollection('locales', localId, 'menu').subscribe(data => {
      this.zone.run(() => {
        this.menu = data;
        console.log('Menú:', this.menu);
      });
    });

    // Leer subcolección comentarios
    this.db.getSubcollection('locales', localId, 'comentarios').subscribe(data => {
      this.zone.run(() => {
        this.comentarios = data;
        console.log('Comentarios:', this.comentarios);
      });
    });
  }

  agregarComentario() {
    const nuevoComentario = {
      comentario: 'Umai!',
      resenia: 5,
      usuario: 'Rengoku Tester',
      local: 'LOC-001'
    };

    this.db.addSubcollectionDocument('locales', 'LOC-001', 'comentarios', nuevoComentario)
      .then(() => console.log('Comentario agregado'));
  }

  agregarProductoMenu() {
    const nuevoProducto = {
      producto: 'Tempura especial',
      descripcion: 'Camarones crujientes con salsa teriyaki',
      precio: 65,
      imagenes: [],
      local: 'LOC-001'
    };

    this.db.addSubcollectionDocument('locales', 'LOC-001', 'menu', nuevoProducto)
      .then(() => console.log('Producto agregado'));
  }
}
