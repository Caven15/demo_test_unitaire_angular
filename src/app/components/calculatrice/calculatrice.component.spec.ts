import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatriceComponent } from './calculatrice.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CalculatriceComponent', () => {
    let component: CalculatriceComponent;
    let fixture: ComponentFixture<CalculatriceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [CalculatriceComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CalculatriceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Test de la méthode obtenirNombre
    it('Devrait obtenir un nomber', () => {
        component.obtenirNombre('5')
        expect(component.nombreActuel).toBe('5')
        component.obtenirNombre('3')
        expect(component.nombreActuel).toBe('53')
    })

    // Test de la méthode obtenirDecimal
    it('Devrait ajouter un point décimal', () => {
        component.obtenirNombre('5')
        component.obtenirDecimal()
        expect(component.nombreActuel).toBe('5.')
        component.obtenirNombre('3')
        expect(component.nombreActuel).toBe('5.3')
    })

    // Test de la méthode obtenirOpération
    it("Devrait définir l'opération et attendre le deuxieme nombre", () => {
        component.obtenirNombre('5')
        component.obtenirOperation('+')
        expect(component.premierOperande).toBe(5)
        expect(component.operateur).toBe('+')
        expect(component.attenteDeuxiemeNombre).toBeTruthy()
    })


    // Test de la méthode effacer
    it("devrait réinitialiser la calculatrice", () => {
        component.obtenirNombre('5')
        component.obtenirOperation('+')
        component.effacer()
        expect(component.nombreActuel).toBe('0')
        expect(component.premierOperande).toBeNull()
        expect(component.operateur).toBeNull()
        expect(component.attenteDeuxiemeNombre).toBeFalse()
    })

    // Test de l'affichage initial
    it("devrait afficher 0 au départ", () => {
        const display = fixture.debugElement.query(By.css('input')).nativeElement
        expect(display.value).toBe('0')
    })

    // Test de l'affichage après mise à jour
    it("devrait mettre à jour l'affichage lors de l'entrée d'un nombre", () => {
        component.obtenirNombre('10')
        fixture.detectChanges()
        const display = fixture.debugElement.query(By.css('input')).nativeElement
        expect(display.value).toBe('10')
    })

    // Test de la fonction addition
    it("devrait additionner dexu nombre", () => {
        component.obtenirNombre('5')
        component.obtenirOperation('+')
        component.obtenirNombre('3')
        component.obtenirOperation('=')
        fixture.detectChanges() // D2tection des changements dans le composant
        const display = fixture.debugElement.query(By.css('input')).nativeElement
        expect(display.value).toBe('8')
    })

    // Test de la fonction soustraction
    it("devrait soustraire dexu nombre", () => {
        component.obtenirNombre('5')
        component.obtenirOperation('-')
        component.obtenirNombre('3')
        component.obtenirOperation('=')
        fixture.detectChanges() // D2tection des changements dans le composant
        const display = fixture.debugElement.query(By.css('input')).nativeElement
        expect(display.value).toBe('2')
    })

    // Test de la fonction multiplication
    it("devrait multiplier dexu nombre", () => {
        component.obtenirNombre('5')
        component.obtenirOperation('x')
        component.obtenirNombre('3')
        component.obtenirOperation('=')
        fixture.detectChanges() // D2tection des changements dans le composant
        const display = fixture.debugElement.query(By.css('input')).nativeElement
        expect(display.value).toBe('15')
    })

    // Test de la fonction division
    it("devrait diviser dexu nombre", () => {
        component.obtenirNombre('10')
        component.obtenirOperation('/')
        component.obtenirNombre('2')
        component.obtenirOperation('=')
        fixture.detectChanges() // D2tection des changements dans le composant
        const display = fixture.debugElement.query(By.css('input')).nativeElement
        expect(display.value).toBe('5')
    })

    // Test de la fonction division par zéro
    it("devrait gérer la division pas réro", () => {
        component.obtenirNombre('5')
        component.obtenirOperation('/')
        component.obtenirNombre('0')
        expect(() => component.obtenirOperation('=')).toThrow()
    })
});
