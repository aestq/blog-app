import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { EditableProfile } from 'features/EditableProfile'
import cls from './ProfilePage.module.scss'

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()

  if(!id) {
    return null
  }

  return (
    <div className={cls.ProfilePage}>
      <EditableProfile id={id} />
    </div>
  )
}

export default memo(ProfilePage)
