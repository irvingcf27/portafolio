import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({//de un servicio -- decorador de un servicio
  providedIn: 'root'// en que nivel que lo inyecte automaticamente
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) {
        this.cargaInfo();
        this.cargarEquipo();
    // console.log('Servicio de infoPagina listo');
    // Leer el archivo JSON
    // en esta seccion voy a crear que me permita leer el archivo JSON
  }

  private cargaInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

    this.cargada = true;
    this.info = resp;
   // console.log(resp);
        });
    }

    
  private cargarEquipo(){
    this.http.get('https://angular-html-10ebb.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

 
    this.equipo = resp;
   // console.log(resp);
        });
        }
  }




