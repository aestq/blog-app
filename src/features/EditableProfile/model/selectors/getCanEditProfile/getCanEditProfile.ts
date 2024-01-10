import { createSelector } from 'reselect'
import { getUserAuthData } from 'entities/User'
import { getProfileData } from '../getProfileData/getProfileData'

export const getCanEditProfile = createSelector(
  getUserAuthData,
  getProfileData,
  (user, profile) => {
    if(user && profile) {
      return user.id === profile.id
    }

    return false
  }
)
