import {Component, OnInit} from '@angular/core';
import {Plant} from '../plant';
import {PlantService} from '../plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Array<Plant> = [];
  interiorType: string = 'Interior';
  exteriorType: string = 'Exterior';

  constructor(private plantServie: PlantService) {
  }

  ngOnInit() {
    this.getAllPlants();
  }

  getAllPlants(): void {
    this.plantServie.getPlants().subscribe(plants => this.plants = plants);
  }

  getInteriorSize(): number {
    return this.plants.filter(plant => plant.tipo === this.interiorType).length;
  }

  getExteriorSize(): number {
    return this.plants.filter(plant => plant.tipo === this.exteriorType).length;
  }

}
