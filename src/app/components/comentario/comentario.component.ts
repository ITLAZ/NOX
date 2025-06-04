import { Component, Input } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss'],
  standalone: false
})
export class ComentarioComponent {
  @Input() lugarId: string = ''; // ID del lugar
  comentario: string = ''; // Comentario del usuario
  resenia: number = 0; // Número de estrellas (1-5)
  nick: string = 'Anónimo'; // Nick del usuario

  constructor(
    private db: DatabaseService,
    private authService: AuthService,
    private modalController: ModalController
  ) {
    // Obtener el nick del usuario autenticado, considerando usuarios de Google
    if (this.authService.profile?.nick) {
      this.nick = this.authService.profile.nick;
    } else if (this.authService.profile?.displayName) {
      this.nick = this.authService.profile.displayName;
    } else {
      this.nick = 'Anónimo';
    }
  }

  async agregarComentario() {
    if (!this.comentario || this.resenia < 1 || this.resenia > 5) {
      console.warn('Comentario o reseña no válidos');
      return;
    }

    const nuevoComentario = {
      comentario: this.comentario,
      resenia: this.resenia,
      usuario: this.nick,
      local: this.lugarId,
    };

    try {
      await this.db.addSubcollectionDocument('locales', this.lugarId, 'comentarios', nuevoComentario);
      console.log('Comentario agregado');
      this.cerrarModal();
    } catch (error) {
      console.error('Error al agregar comentario:', error);
    }
  }

  cerrarModal() {
    this.modalController.dismiss();
  }
}
