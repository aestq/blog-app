import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { type ArticleTextBlock } from '../../model/types/acticle'
import cls from './TextBlock.module.scss'

interface TextBlock {
  className?: string
  block: ArticleTextBlock
}

export const TextBlock = memo((props: TextBlock) => {
  const { className, block } = props

  return (
    <div className={className}>
      {block.title && (
        <Text
          className={cls.title}
          title={block.title}
        />
      )}
      {block.paragraphs.map((paragraph, index) => (
        <Text
          className={cls.paragraph}
          key={index}
          text={paragraph}
        />
      ))}
    </div>
  )
})

TextBlock.displayName = 'TextBlock'
