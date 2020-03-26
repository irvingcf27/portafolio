import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {//cuando sea utilizado prodctuos

  cargando=true;//me indica que esta cargando
  producto: Productos[]=[];//arreglo vacio, cada uno de los item es de tipo de procutos
  productosFiltrados: Productos[]=[];
  constructor(private http: HttpClient) {
    
    this.cargarProdutos();//tiene los productos
   
  }

  private cargarProdutos(){//empiece a cargar aqui
    
    return new Promise( ( resolve, reject) =>{//la promesa se ejecuta si se hizo o no 

      this.http.get('https://angular-html-10ebb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Productos[])=>{//con esto hace definicion de la peticion
        this.producto=resp;  
        this.cargando=false; //cuando y atengo los productos lo inicializo en falso
        resolve();//termino exitosamente
      });
    
    });
 
  }

  getProducto(id: string){

    return this.http.get(`https://angular-html-10ebb.firebaseio.com/productos/${ id }.json`);//recibe del parametro
  //regresar toda la deficion de ese observable
  }

  buscarProducto(termino: string){
    if( this.producto.length ===0){
      //cargar productos
      this.cargarProdutos().then(()=> {//.then es apra ejecutar un codigo despues
      //de que termine
        //SE VA EJECUTAR DESPUES DE OBTENER LOS PRODUCTOS Y SE VA APLICAR EL FILTRO
      this.filtrarProductos(termino);
      });
    }else{
      //aplicar el filtro
      this.filtrarProductos(termino);// si ya tiene datos en ese objeto se va a volver 
    }
  
  }
  private filtrarProductos( termino: string){
    this.productosFiltrados=[];// purgar el arreglo cuando se vuelva a llamr
    //console.log(this.producto);

    termino = termino.toLocaleLowerCase();//sencikey

    this.producto.forEach( prod =>{
      
      const titutoLower = prod.titulo.toLocaleLowerCase();//const variable temporal
      
      if(  prod.categoria.indexOf( termino ) >= 0 ||
           titutoLower.indexOf(termino)>= 0){//coincide con la persona escribe
        this.productosFiltrados.push( prod );
      }
    });
  }
}
