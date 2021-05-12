import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'

import {
    getCurrentUserAction,
    getCurrentUserSuccessAction,
    getCurrentUserFailureAction
} from '../actions/getCurrentUser.action'
import { AuthService } from '../../services/auth.service'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { of } from 'rxjs'
import { PersistanceService } from 'src/app/shared/services/persistance.service'

@Injectable()
export class GetCurrentUserEffect {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCurrentUserAction),
            switchMap(() => {
                const token = this.persistanceService.get('accessToken')
                if (!token) {
                    return of(getCurrentUserFailureAction())
                }

                return this.authService.getCurrentUser().pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return getCurrentUserSuccessAction({ currentUser })
                    }),

                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            getCurrentUserFailureAction()
                        )
                    })
                )
            })
        )
    )
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService
    ) { }
}
