import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {PopularTagType} from 'src/app/shared/types/popularTag.type'
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {GetTagPopularResponseInterface} from 'src/app/shared/modules/tagPopular/types/getTagPopularResponse.Interface'
@Injectable()
export class TagPopularsService {
  constructor(private http: HttpClient) {}

  gettagPopulars(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'
    return this.http.get(url).pipe(
      map((response: GetTagPopularResponseInterface) => {
        return response.tags
      })
    )
  }
}
