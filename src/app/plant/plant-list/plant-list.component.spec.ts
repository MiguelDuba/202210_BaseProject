/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlantListComponent} from './plant-list.component';
import {HttpClientModule} from '@angular/common/http';
import {Plant} from "../plant";
import faker from "@faker-js/faker";

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    component.plants = Array(3).fill(createPlant());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByTagName('th').length).toEqual(4)
  });

  it('should create table body', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByTagName('tr').length).toEqual(4)
  });

  const createPlant = () => {
    return new Plant(
      faker.datatype.number(),
      faker.name.findName(),
      faker.name.jobTitle(),
      faker.random.arrayElement(['Interior', 'Exterior']),
      faker.datatype.number(),
      faker.name.jobArea(),
      faker.name.jobDescriptor()
    )
  };
});
