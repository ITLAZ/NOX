import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-comprar-entradas',
  templateUrl: './comprar-entradas.page.html',
  styleUrls: ['./comprar-entradas.page.scss'],
  standalone: false
})
export class ComprarEntradasPage implements OnInit {
  entradas: any[] = [];
  eventoId!: string;

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService
  ) { }

  ngOnInit() {
    // Capturar el ID del evento desde la URL
    this.eventoId = this.route.snapshot.paramMap.get('eventoId')!;
    
    // Cargar las entradas asociadas
    this.db.getSubcollection('eventos', this.eventoId, 'entradas').subscribe({
      next: (data) => {
        this.entradas = data;
        console.log('Entradas cargadas:', this.entradas);
      },
      error: (err) => console.error('Error al cargar entradas:', err),
    });
  }
}
