import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculatriceService {

    constructor() { }

    addition(a : number, b : number) : number {
        return a + b
    }

    soustraction(a : number, b : number) : number {
        return a - b
    }

    multiplication(a : number, b : number) : number {
        return a * b
    }

    division(a : number, b : number) : number {
        if (b === 0){
            throw new Error("Divison par zéro impossible !!!")
        }
        return a / b
    }
}
