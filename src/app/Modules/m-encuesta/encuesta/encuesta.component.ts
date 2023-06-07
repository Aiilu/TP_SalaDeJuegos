import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/Clases/usuario';
import { BasedatosService } from 'src/app/Servicios/basedatos.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {
  formEncuesta: FormGroup;
  susCheck1: Subscription | undefined;
  susCheck2: Subscription | undefined;
  susCheck3: Subscription | undefined;
  susCheck4: Subscription | undefined;
  susUsuario : Subscription;
  miUsuario : Usuario = new Usuario("", "", "");

  constructor(private fb: FormBuilder, private servBase:BasedatosService, private servUsuario:UsuariosService) {
    this.formEncuesta = this.fb.group({
      'nombre': ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      'apellido': ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'telefono': ['', [Validators.required ,Validators.pattern('[0-9]*'), this.lengthValidator]],
      'comentario': ['', [this.lengthValidator2, this.spacesValidator2]],
      'opcion': ['MD'],
      'check1': [false],
      'check2': [false],
      'check3': [false],
      'check4': [false],
      'check[]' : this.fb.array([], [this.checkValidator])
      // 'check[]': this.fb.array([])
      // 'check[]' : [[['check[1]'], ['check[2]'], ['check[3]'], ['check[4]']], this.checkValidator]
    });

    // this.formEncuesta.get('check1')?.valueChanges.subscribe(
    //   (a:AbstractControl)=>{
    //     let hola = <FormArray> this.formEncuesta.get('check[]');
    //     if(a.value == true && !(hola.controls.findIndex(a.))){
    //       hola.push(a);
    //     }
    //   }
    // )

    // this.formEncuesta.get('check[]')?.addValidators()
    // const arr = new FormArray([
    //   new FormControl('Nancy'),
    //   new FormControl('Drew')
    // ]);

    // this.formCheck = new FormGroup(
    //   {

    //   }
    // );

    this.susCheck1 = this.formEncuesta.get('check1')?.valueChanges.subscribe((value)=>this.manejarFA(value, "Instagram"));
    this.susCheck2 = this.formEncuesta.get('check2')?.valueChanges.subscribe((value)=>this.manejarFA(value, "Facebook"));
    this.susCheck3 = this.formEncuesta.get('check3')?.valueChanges.subscribe((value)=>this.manejarFA(value, "Twitter"));
    this.susCheck4 = this.formEncuesta.get('check4')?.valueChanges.subscribe((value)=>this.manejarFA(value, "Recomendacion"));

    this.susUsuario = this.servUsuario.getActivo.subscribe((data)=>
    {
      this.miUsuario = data;
    });
  }
  
  private manejarFA(value: boolean, palabra: string){
    let farray = <FormArray>this.formEncuesta.get('check[]');
    let indice = farray.controls.findIndex((a)=>a.value == palabra);

    if(this.formEncuesta.get('check[]')?.untouched){
      this.formEncuesta.get('check[]')?.markAsTouched();
    }

    if(value){
      if(indice == -1){
        farray.push(new FormControl(palabra));
      }
    }else{
      if(indice != -1){
        farray.removeAt(indice);
      }
    }
  }

  private checkValidator(control: AbstractControl): null | object {
    // const valor = <boolean>control.value;
    // if(this.formEncuesta.get('check1')?.value || this.formEncuesta.get('check2')?.value ||
    //    this.formEncuesta.get('check3')?.value || this.formEncuesta.get('check4')?.value){
    //   console.log('valido');
    // }else{
    //   console.log('invalido');
    // }

    let array = <FormArray>control;
    // console.log(array.controls);
    let valor = false;

    if(array.controls.length > 0){
      valor = true;
    }

    if(valor == false)
    {
      return {checkVal: true};
    }

    return null;
  }

  private spacesValidator(control: AbstractControl): null | object {
    const valor = <string>control.value;
    const spaces = valor.includes(' ');

    if(spaces)
    {
      return {containsSpaces: true};
    }
    else
    {
      return null;
    }
  }

  private spacesValidator2(control: AbstractControl): null | object {
    const valor = <string>control.value;
    let i = 0;
    let spaces = 0;

    for(i=0; i<valor.length; i++)
    {
      if(valor.at(i) == " ")
      {
        spaces += 1;
      }
    }

    if(spaces == valor.length)
    {
      return {containsSpaces2: true};
    }
    else
    {
      return null;
    }
  }

  private lengthValidator(control: AbstractControl): null | object {
    const valor = <string>control.value;
    const length = valor.length;

    if(length > 10)
    {
      return {maxLength: true};
    }
    else
    {
      return null;
    }
  }

  private lengthValidator2(control: AbstractControl): null | object {
    const valor = <string>control.value;
    const length = valor.length;

    if(length < 5  || length > 500)
    {
      return {maxLength2: true};
    }
    else
    {
      return null;
    }
  }

  private numberValidator(control: AbstractControl): null | object {
    const valor = <string>control.value;
    let numeros = "0123456789";
    let i;

    for(i=0; i<valor.length; i++){
      if (numeros.indexOf(valor.charAt(i),0)!=-1){
        return null;
      }
   }

   return {containsNoNumber: true};
  }

  guardar()
  {
    let formateoResp2;

    if(this.formEncuesta.get('opcion')?.value == "D")
    {
      formateoResp2 = "Divertido";
    }
    else if(this.formEncuesta.get('opcion')?.value == "MD")
    {
      formateoResp2 = "Muy divertido";
    }
    else if(this.formEncuesta.get('opcion')?.value == "ND")
    {
      formateoResp2 = "Nada divertido";
    }

    this.servBase.guardar("Encuesta", {usuario: this.miUsuario.mail, nombre: this.formEncuesta.value.nombre, apellido: this.formEncuesta.value.apellido, edad: this.formEncuesta.value.edad, telefono: this.formEncuesta.value.telefono, resp1: this.formEncuesta.value.comentario, resp2: formateoResp2, resp3: this.formEncuesta.get('check[]')?.value});
    Swal.fire(
          'Encuesta cargada con exito!',
          'Haga click para continuar',
          'success'
        );
  }

  ngOnDestroy()
  {
    this.susCheck1?.unsubscribe();
    this.susCheck2?.unsubscribe();
    this.susCheck3?.unsubscribe();
    this.susCheck4?.unsubscribe();
    this.susUsuario.unsubscribe();
  }
}
