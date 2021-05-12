import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { FeedStateInterface } from '../types/feedState.interface'

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>('feed')

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (authState: FeedStateInterface) => authState.isLoading
)


export const errorSelector = createSelector(
  feedFeatureSelector,
  (authState: FeedStateInterface) => authState.error
)


export const feedSelector = createSelector(
  feedFeatureSelector,
  (authState: FeedStateInterface) => authState.data
)
