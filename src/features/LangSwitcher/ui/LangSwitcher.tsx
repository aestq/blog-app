import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className, short } = props
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  )
}