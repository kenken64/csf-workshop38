import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Dexie from "dexie";
import { City } from "../model/City";

@Injectable()
export class CitiesRepository extends Dexie {
    // Variable to hold the table
    city!: Dexie.Table<City, string>

    constructor(private router: Router) {
        super('citiesdb')
        this.version(1).stores({
            city: 'city'
        })
        this.city = this.table('city')
    }

    addCity(city: City): Promise<string> {
        return this.city.add(city)
    }

    getAllCities(): Promise<City[]> {
        return this.city.orderBy('city').toArray()
    }
}