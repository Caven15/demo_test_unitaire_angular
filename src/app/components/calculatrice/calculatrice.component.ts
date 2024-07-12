import { Component } from '@angular/core';

@Component({
    selector: 'app-calculatrice',
    templateUrl: './calculatrice.component.html',
    styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {
    nombreActuel: string = '0'
    premierOperande: number | null = null
    operateur: string | null = null
    attenteDeuxiemeNombre: boolean = false

    obtenirNombre(nombre: string): void {
        if (this.attenteDeuxiemeNombre) {
            this.nombreActuel = nombre
            this.attenteDeuxiemeNombre = false
        } else {
            this.nombreActuel === '0' ? this.nombreActuel = nombre : this.nombreActuel += nombre
        }
    }

    effectuerCalcul(op: string, secondOperateur: number): number | null {
        switch (op) {
            case '+':
                return this.premierOperande! + secondOperateur // non nul au moment de l'utilisation
            case '-':
                return this.premierOperande! - secondOperateur
            case 'x':
                return this.premierOperande! * secondOperateur
            case '/':
                return this.premierOperande! / secondOperateur
            case '=':
                return secondOperateur
            default:
                return null
        }
    }

    obtenirOperation(operateur: string): void {
        if (this.premierOperande === null) {
            this.premierOperande = Number(this.nombreActuel)
        } else if (this.operateur) {
            if (this.operateur === '/' && this.nombreActuel === '0') {
                throw new Error('Division par zéro impossible')
            }
            const resultat = this.effectuerCalcul(this.operateur, Number(this.nombreActuel))
            this.nombreActuel = String(resultat)
            this.premierOperande = resultat
        }

        this.operateur = operateur
        this.attenteDeuxiemeNombre = true
    }

    obtenirDecimal(): void {
        if (!this.nombreActuel.includes(".")) {
            this.nombreActuel += '.'
        }
    }

    effacer(): void {
        this.nombreActuel = '0'
        this.premierOperande = null
        this.operateur = null
        this.attenteDeuxiemeNombre = false
    }
}
