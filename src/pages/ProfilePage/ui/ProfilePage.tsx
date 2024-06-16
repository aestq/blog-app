import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { EditableProfile } from 'features/EditableProfile'

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()

  if(!id) {
    return null
  }

  return (
    <Page>
      <EditableProfile id={id} />
    </Page>
  )
}

export default memo(ProfilePage)
