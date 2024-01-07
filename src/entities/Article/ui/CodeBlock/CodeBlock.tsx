import { memo } from 'react'
import { Code } from 'shared/ui/Code/Code'
import { type ArticleCodeBlock } from '../../model/types/acticle'

interface CodeBlockProps {
  className?: string
  block: ArticleCodeBlock
}

export const CodeBlock = memo((props: CodeBlockProps) => {
  const { className, block } = props

  return (
    <Code
      className={className}
      text={block.code}
    />
  )
})

CodeBlock.displayName = 'CodeBlock'
