import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from 'entities/Article'
import { getUserAuthData } from 'entities/User'

export const getCanEditArticle = createSelector(
  getUserAuthData,
  getArticleDetailsData,
  (authData, article) => {
    if(!article || !authData) {
      return false
    }

    return article.user.id === authData.id
  }
)
