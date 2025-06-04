import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, IonContent, AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.page.html',
  styleUrls: ['./pay-card.page.scss'],
  standalone: false
})
export class PayCardPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent; // Referencia al contenido para el scroll

  cardForm!: FormGroup;
  isProcessing = false;
  paymentSuccess: boolean | null = null;

  // Variables para el selector de fecha
  fechaTemp: string = '';
  fechaSeleccionada: string = '';
  mostrarFecha: boolean = false;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private router: Router,
    private databaseService: DatabaseService, // Asegúrate de importar tu servicio de base de datos
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiry: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[+0-9 ]{8,20}$')]],
      postalCode: ['', Validators.required]
    });
  }

  toggleFecha() {
    this.mostrarFecha = !this.mostrarFecha;
  }

  onFechaChange(event: any) {
    this.fechaTemp = event.detail.value;
  }

  confirmarFecha() {
    if (this.fechaTemp) {
      this.fechaSeleccionada = this.formatDate(this.fechaTemp);
      this.cardForm.get('expiry')?.setValue(this.fechaSeleccionada);
    }
    this.mostrarFecha = false;
  }

  formatDate(value: string): string {
    const [year, month] = value.split('-');
    return `${month}/${year}`;
  }

  submitPayment() {
  console.log('Formulario enviado:', this.cardForm.value);

  if (this.cardForm.invalid) {
    console.warn('Formulario inválido');
    this.cardForm.markAllAsTouched();
    this.mostrarAlerta('Datos incompletos o erroneos', 'Por favor, verifica todos los campos correctamente.');
    return;
  }

  this.isProcessing = true;
  this.paymentSuccess = null;

  // Simula el procesamiento del pago
  setTimeout(() => {
    const success = true; // Puedes cambiar a false para simular fallo
    this.paymentSuccess = success;
    this.isProcessing = false;

    if (!success) {
      this.mostrarAlerta('Error en el pago', 'Hubo un problema al procesar tu pago. Intenta nuevamente.');
    }
  }, 5000);
}

  async scrollToCenter() {
    const scrollHeight = this.content.getScrollElement();
    const center = (await scrollHeight).scrollHeight / 2;
    this.content.scrollToPoint(0, center - 200, 300);
  }

volverInicio() {
  // Recuperar el perfil del usuario logueado desde localStorage
  const perfil = localStorage.getItem('profile');
  const ultimaCompra = localStorage.getItem('ultimaCompra');

  if (!perfil) {
    console.error('No se encontró el perfil del usuario en localStorage.');
    return;
  }

  const usuario = JSON.parse(perfil);
  const usuarioId = usuario.id; // Extraer el ID del usuario logueado

  if (ultimaCompra) {
    const compraData = JSON.parse(ultimaCompra);

    if (compraData.local) {
      // Preparar datos para la subcolección 'historialCompraLocal'
      const historialLocal = {
        fecha: compraData.fecha,
        total: compraData.total,
        local: compraData.local, // Asegurarse de que sea el ID correcto del local
        codigo: compraData.local,
      };

      // Registrar en Firestore
      this.databaseService.addSubcollectionDocument(
        'usersPrueba',
        usuarioId,
        'historialCompraLocal',
        historialLocal
      ).then(() => {
        console.log('Compra local registrada exitosamente.');
      }).catch(error => {
        console.error('Error al registrar la compra local:', error);
      });
    } else if (compraData.evento) {
      // Preparar datos para la subcolección 'historialCompraEvento'
      const historialEvento = {
        fecha: compraData.fecha,
        total: compraData.total,
        evento: compraData.evento,
      };

      // Registrar en Firestore
      this.databaseService.addSubcollectionDocument(
        'usersPrueba',
        usuarioId,
        'historialCompraEvento',
        historialEvento
      ).then(() => {
        console.log('Compra de evento registrada exitosamente.');
      }).catch(error => {
        console.error('Error al registrar la compra de evento:', error);
      });
    }
  }

  // Eliminar los datos de última compra del localStorage
  localStorage.removeItem('ultimaCompra');
  
  // Navegar de vuelta al menú
  this.router.navigate(['/home']); // Cambia '/menu' por la ruta deseada
}

  reintentarPago() {
    this.cardForm.reset();
    this.paymentSuccess = null;
    this.fechaSeleccionada = '';
    this.fechaTemp = '';
  }
  async mostrarAlerta(titulo: string, mensaje: string) {
  const alert = await this.alertController.create({
    header: titulo,
    message: mensaje,
    buttons: ['OK'],
  });

  await alert.present();
}

}
