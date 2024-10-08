import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSpaceEditorFormatWrapper } from '@codeffekt/ce-core-data';
import { CeFormsPipesModule, CeListModule, CePipesModule } from '@codeffekt/ce-core';

@Component({
  selector: 'lib-list-item-space',
  standalone: true,
  imports: [
    CommonModule,
    CeListModule,
    CePipesModule,
    CeFormsPipesModule,
  ],
  templateUrl: './list-item-space.component.html',
  styleUrls: ['./list-item-space.component.css']
})
export class ListItemSpaceComponent {

  @Input() item!: FormSpaceEditorFormatWrapper;

}
