export interface BuscaClima {
  coord: Coordenada
  weather: Clima[]
  base: string
  main: Main
  visibility: number
  wind: Vento
  clouds: Nuvens
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coordenada {
  lon: number
  lat: number
}

export interface Clima {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Vento {
  speed: number
  deg: number
}

export interface Nuvens {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}