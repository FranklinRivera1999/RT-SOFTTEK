import { AxiosService } from "../classes";

export default class StarshipService {
  private _axiosService: AxiosService;

  constructor() {
    this._axiosService = new AxiosService();
  }
  async getAllStarships() {
    const response = await this._axiosService.getAllStarships();
    const data = response.data;
    return this._parseStarship(data);
  }

  private _parseStarship(data: any) {
    return {
      contador: data.count,
      siguiente: data.next,
      anterior: data.previous,
      resultados: data.results.map((result: any) => {
        return {
          nombre: result.name,
          modelo: result.model,
          fabricante: result.manufacturer,
          costoEnCreditos: result.cost_in_credits,
          longitud: result.length,
          velocidadMaximaAtmosfera: result.max_atmosphering_speed,
          tripulacion: result.crew,
          pasajeros: result.passengers,
          capacidadCarga: result.cargo_capacity,
          consumibles: result.consumables,
          clasificacionHiperimpulsor: result.hyperdrive_rating,
          MGLT: result.MGLT,
          claseNaveEstelar: result.starship_class,
          pilotos: result.pilots,
          peliculas: result.films,
          creado: result.created,
          editado: result.edited,
          url: result.url,
        };
      }),
    };
  }
}
