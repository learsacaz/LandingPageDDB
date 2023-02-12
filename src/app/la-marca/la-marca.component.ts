import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-la-marca',
  templateUrl: './la-marca.component.html',
  styleUrls: ['./la-marca.component.scss']
})
export class LaMarcaComponent implements OnInit {

  //El formulario con sus datos
  public formularioSuscripcion = new FormGroup({
    nombre: new FormControl(),
    correo: new FormControl(),
    tipoDocumento: new FormControl(),
    numeroDocumento: new FormControl(),
    telefono: new FormControl(),
    aceptaTyC: new FormControl()
  });

  //Condicionales para mostrar mensajes
  public popUpValid:boolean = false;
  public popUpInvalid:boolean = false;

  //El constructor construye el formulario con sus datos y los atributos (validaciones)
  constructor(private formBuilder: FormBuilder) {
    this.formularioSuscripcion = this.formBuilder.group({
      nombre: ['',[Validators.required,Validators.minLength(1)]],
      correo: ['',[Validators.required,Validators.email,Validators.minLength(1),Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
      tipoDocumento: ['',[Validators.required]],
      numeroDocumento: ['',[Validators.required,Validators.minLength(1)]],
      telefono: ['',[Validators.required,Validators.minLength(1)]],
      aceptaTyC: ['',[Validators.required,Validators.minLength(1)]]
    });
  }

  
  //El OnInit no Ejecuta nada porque aún no se implementa el back
  ngOnInit(): void {
  }

  //Método que se llama cuando el formulario hace submit
  suscribir(){

    //Rectifica si los campos son válidos
    if(this.formularioSuscripcion.valid){
      this.popUpValid = true;
      setTimeout(()=>this.popUpValid = false,4000);
      console.log(JSON.stringify(this.formularioSuscripcion.value));

      //Refresca los campos
      this.formularioSuscripcion = this.formBuilder.group({
        nombre: ['',[Validators.required,Validators.minLength(1)]],
        correo: ['',[Validators.required,Validators.email,Validators.minLength(1),Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
        tipoDocumento: ['',[Validators.required]],
        numeroDocumento: ['',[Validators.required,Validators.minLength(1)]],
        telefono: ['',[Validators.required,Validators.minLength(1)]],
        aceptaTyC: [false,[Validators.requiredTrue]]
      });
      
      
    }
  }

}
