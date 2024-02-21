import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BuscaClimaService } from '../../services/busca-clima.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  providers: [BuscaClimaService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  buscarClimaForm!: FormGroup;

  constructor(private service: BuscaClimaService) {
    this.buscarClimaForm = new FormGroup({
      cidade: new FormControl(''),
    });
  }

  onSubmit() {
    console.log('estou auqi')
    this.service.buscaClima(this.buscarClimaForm.value.cidade).subscribe(
    );
  }
}
