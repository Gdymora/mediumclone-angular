import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'

import {
    getFeedAction,
    getFeedSuccessAction,
    getFeedFailureAction
} from '../actions/getFeed.action'
import { FeedService } from '../../services/feed.service'
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface'
import { of } from 'rxjs'

@Injectable()
export class GetFeedEffect {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getFeedAction),
            switchMap(({ url }) => {
                return this.feedService.getFeed(url).pipe(
                    map((feed: GetFeedResponseInterface) => {
                        return getFeedSuccessAction({ feed })
                    }),

                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            getFeedFailureAction()
                        )
                    })
                )
            })
        )
    )
    constructor(
        private actions$: Actions,
        private feedService: FeedService
    ) { }
}
