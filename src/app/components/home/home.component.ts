import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BuscaClimaService } from '../../services/busca-clima/busca-clima.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BuscaClima } from '../../services/busca-clima/busca-clima.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  providers: [BuscaClimaService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  buscarClimaForm!: FormGroup;

  buscaClimaResponse!: BuscaClima;

  tipoTemperatura: 'CELSIUS' | 'FAHRENHEIT' = 'CELSIUS';

  constructor(private service: BuscaClimaService) {
    this.buscarClimaForm = new FormGroup({
      cidade: new FormControl(''),
    });
  }

  onSubmit() {
    this.service.buscaClima(this.buscarClimaForm.value.cidade).subscribe({
      next: (data) => (this.buscaClimaResponse = data),
      error: () => console.error('Erro ao tentar buscar a cidade'),
    });
  }

  converterKelvinParaCelsius(kelvin: number): number {
    return Number.parseInt(String(kelvin - 273.15));
  }

  converterKelvinParaFahrenheit(kelvin: number): number {
    return Number.parseInt(String(((kelvin - 273.15) * 9) / 5 + 32));
  }

  ventoEmKmPorHora(speed: number): number {
    return Math.round(speed * 3.6);
  }
}
