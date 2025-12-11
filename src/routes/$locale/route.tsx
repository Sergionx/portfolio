import { createFileRoute, Outlet } from '@tanstack/react-router'
import i18n from '@/i18n'

export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    const locale = params.locale || 'en'
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  },
  component: Outlet,
})
