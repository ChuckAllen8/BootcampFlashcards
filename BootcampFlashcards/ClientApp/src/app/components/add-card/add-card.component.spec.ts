import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddCardComponent } from './add-card.component';

let component: AddCardComponent;
let fixture: ComponentFixture<AddCardComponent>;

describe('add-card component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddCardComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddCardComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
