import { memo } from 'react'
import { type ArticleView } from 'entities/Article'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { viewTypes } from '../model/consts'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onChange?: (view: ArticleView) => void
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onChange } = props

  const onClick = (newView: ArticleView) => {
    return () => {
      onChange?.(newView)
    }
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((item) => (
        <Button
          key={item.view}
          theme='clear'
          onClick={onClick(item.view)}
        >
          <Icon
            className={classNames('', { [cls.selected]: view === item.view })}
            Svg={item.icon}
          />
        </Button>
      ))}
    </div>
  )
})

ArticleViewSelector.displayName = 'ArticleViewSelector'
