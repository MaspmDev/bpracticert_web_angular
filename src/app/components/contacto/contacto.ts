import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-contacto',
  standalone:true, 
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], 
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
})
export class Contacto {
  formContacto: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.formContacto = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['' , [Validators.required, Validators.email]],
      celular: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      mensaje: ['', Validators.required]
    });
  }

  enviarFormulario(){
    if(this.formContacto.valid){

      //Se envían los datos al backend
      this.http.post("http://localhost:3000/enviar-formulario", this.formContacto.value)
        .subscribe({
          next: () => {
            alert('Formulario enviado correctamente 🎉');
            this.formContacto.reset();
          },
          error: () => {
            alert('Hubo un error al enviar el mensaje 😢');
          }
        });

    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }
}
