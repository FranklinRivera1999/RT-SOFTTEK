import { APIGatewayProxyEvent } from "aws-lambda";
import { StarshipService } from "../services";
export default class StarshipController{
    private _starshipService: StarshipService;
    constructor(){
        this._starshipService = new StarshipService();
    }

    async getStarships(){
        return await this._starshipService.getAllStarships();
    }
}
