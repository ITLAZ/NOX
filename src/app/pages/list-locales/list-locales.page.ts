import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-list-locales',
  templateUrl: './list-locales.page.html',
  styleUrls: ['./list-locales.page.scss'],
  standalone: false,
})
export class ListLocalesPage implements OnInit {
  locales: any[] = []; // Almacena los locales cargados

  constructor(
    private databaseService: DatabaseService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadLocales();
  }

async loadLocales() {
  try {
    const data = await firstValueFrom(this.databaseService.fetchFirestoreCollection('locales'));
    this.locales = data.map((doc: any) => ({ id: doc.id, ...doc })); // No necesitas .data()
  } catch (error) {
    console.error('Error al cargar los locales:', error);
  }
}

  // Navegar a la página de edición de panel de administración
  goToEditPanel(localId: string) {
    this.router.navigate(['/panel-admin', { id: localId }]); // Ajusta la ruta según tu configuración
  }

  // Navegar a la página para agregar un nuevo local
  goToNewLocal() {
    this.router.navigate(['/new-local']);
  }

  // Confirmar y eliminar un local
  async confirmDelete(localId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este local?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            try {
              await this.databaseService.deleteFireStoreDocument('locales', localId);
              this.loadLocales(); // Recargar la lista
            } catch (error) {
              console.error('Error al eliminar local:', error);
            }
          },
        },
      ],
    });

    await alert.present();
  }
}
