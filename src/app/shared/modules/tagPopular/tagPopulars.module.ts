import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagPopularsComponent} from './components/tagPopulars/tagPopulars.component'

@NgModule({
  imports: [CommonModule],
  declarations: [TagPopularsComponent],
  exports: [TagPopularsComponent]
})
export class TagPopularModule {}
