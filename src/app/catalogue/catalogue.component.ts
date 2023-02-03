import { Component } from '@angular/core';
import { PokemonCatalogueService } from '../services/pokemon-catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  constructor(private pokemonCatalogueService: PokemonCatalogueService) {}

  //"ngOnInit" lifecycle hook
  ngOnInit() {
    // Subscribe to the observable returned by the 'fetchPokemin' method
    this.pokemonCatalogueService.fetchPokemons().subscribe((data) => {
      console.log(data);
    });
  }
}
