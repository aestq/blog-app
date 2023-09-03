import { memo } from 'react'
import { EditableProfile } from 'features/EditableProfile'
import cls from './ProfilePage.module.scss'

const ProfilePage = () => {
  return (
    <div className={cls.ProfilePage}>
      <EditableProfile />
    </div>
  )
}

export default memo(ProfilePage)
