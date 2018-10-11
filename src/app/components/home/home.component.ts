import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotiSer: SpotifyService){
    this.loading = true;
    this.error = false;

    this.spotiSer.getRequest().subscribe( ( data : any ) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorServicio: any ) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  };


}
