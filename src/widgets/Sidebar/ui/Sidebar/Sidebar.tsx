import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const mods: Mods = {
    [cls.collapsed]: collapsed
  }

  return (
    <div
      className={classNames(cls.Sidebar, mods, [className])}
      data-testid='sidebar'
    >
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span
            className={cls.link}
          >
            {t('Главная')}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span
            className={cls.link}
          >
            {t('О сайте')}
          </span>
        </AppLink>
      </div>
      <Button
        data-testid='sidebar-toggle'
        className={cls.collapseButton}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        onClick={onToggle}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.langSwitcher}
          short={collapsed}
        />
      </div>
    </div>
  )
}
