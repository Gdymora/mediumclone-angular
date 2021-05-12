import { ArticleInterface } from 'src/app/shared/types/article.interface'

export interface GetFeedResponseInterface {
    article: ArticleInterface[]
    aticleCount: number
}