import { TestBed } from '@angular/core/testing';

import { CalculatriceService } from './calculatrice.service';

describe('CalculatriceService', () => {
    let service: CalculatriceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculatriceService);
    });

    it('Devrait additionner deux nombres', () => {
        const resultat : number = service.addition(2,3)
        expect(resultat).toBe(5) // 2 + 3 = 5
    })

    it('Devrait soustraire deux nombres', () => {
        const resultat : number = service.soustraction(10,5)
        expect(resultat).toBe(5)
    })

    it('Devrait multiplier deux nombres', () => {
        const resultat : number = service.multiplication(3,5)
        expect(resultat).toBe(15)
    })

    it('Devrait diviser deux nombres', () => {
        const resultat : number = service.division(6,3)
        expect(resultat).toBe(2)
    })

    it('Devrait lancer une erreur lors de la division par zéro', () => {
        expect(() => service.division(20,0)).toThrow(new Error("Divison par zéro impossible !!!"))
    })
});
