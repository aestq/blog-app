import { memo } from 'react'
import CopyIcon from 'shared/assets/icons/copy-icon.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props

  const onCopy = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copy}
        onClick={onCopy}
      >
        <CopyIcon className={cls.icon}/>
      </Button>
      <code>
        {text}
      </code>
    </pre>
  )
})

Code.displayName = 'Code'
