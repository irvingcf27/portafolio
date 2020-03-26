import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/producto.interface';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  Productos: ProductoDescripcion;
  id: String;

  constructor(private route: ActivatedRoute, 
              public productosService: ProductosService) { }

  ngOnInit() {//llamar esta instruccion
    this.route.params
        .subscribe( parametros => {
          //console.log(parametros['id']);//leer todos los paramtetos que recibamos por el url
          this.productosService.getProducto(parametros['id'])//referecia al servicio
              .subscribe((Productos: ProductoDescripcion) =>{
                this.id =parametros['id'];//necesito utilizar este id en el html para construir el path
                this.Productos= Productos;//prodcito que yo recibo por el subscribe
              // console.log(Productos);
              });
        });
  //suscribe va estar pendiente de todos los cambios que sucedan con 
  //los parametros del url
  }

}
