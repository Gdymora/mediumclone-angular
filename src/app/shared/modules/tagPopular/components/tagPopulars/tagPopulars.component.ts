import {Component, Input} from '@angular/core'

import {PopularTagType} from 'src/app/shared/types/popularTag.type'

@Component({
  selector: 'app-tag-popular',
  templateUrl: './tagPopulars.component.html'
})
export class TagPopularsComponent {
  @Input('tags') tagsProps: PopularTagType[]
}
