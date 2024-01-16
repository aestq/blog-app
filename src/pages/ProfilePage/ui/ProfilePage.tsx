import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { EditableProfile } from 'features/EditableProfile'
import cls from './ProfilePage.module.scss'

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()

  if(!id) {
    return null
  }

  return (
    <Page className={cls.ProfilePage}>
      <EditableProfile id={id} />
    </Page>
  )
}

export default memo(ProfilePage)
