import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState<boolean>(false)
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
          theme={AppLinkTheme.PRIMARY}
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
          theme={AppLinkTheme.PRIMARY}
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
