import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { type ArticleImageBlock } from '../../model/types/acticle'
import cls from './ImageBlock.module.scss'

interface ImageBlockProps {
  className?: string
  block: ArticleImageBlock
}

export const ImageBlock = memo((props: ImageBlockProps) => {
  const { className, block } = props

  return (
    <div className={className}>
      <div className={cls.container}>
        <img
          className={cls.image}
          src={block.src}
          alt='Image'
        />
      </div>
      {block.title && (
        <Text
          align='center'
          text={block.title}
        />
      )}
    </div>
  )
})

ImageBlock.displayName = 'ImageBlock'
