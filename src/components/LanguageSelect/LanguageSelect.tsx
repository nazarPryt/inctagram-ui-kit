import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { CustomSelect } from '../Select'
import { FlagEngIcon } from './icons/FlagEngIcon'
import { FlagRussiaIcon } from './icons/FlagRussiaIcon'

const Country = [
  {
    label: (
      <>
        <FlagRussiaIcon />
        Русский
      </>
    ),
    value: 'ru',
  },
  {
    label: (
      <>
        <FlagEngIcon />
        English
      </>
    ),
    value: 'en',
  },
]

export const LanguageSelect = () => {
  const { asPath, defaultLocale, pathname, push, query } = useRouter()
  const [value, setValue] = useState(defaultLocale)
  const changeLangHandler = (country: string) => {
    setValue(country)
    push({ pathname, query }, asPath, { locale: country })
    localStorage.setItem('lang', country)
  }

  useEffect(() => {
    const lang = localStorage.getItem('lang')

    if (lang) {
      setValue(lang)
      push({ pathname, query }, asPath, { locale: lang })
    } else {
      push({ pathname, query }, asPath, { locale: defaultLocale })
    }
  }, [])

  return (
    <div>
      <CustomSelect
        defaultValue={defaultLocale}
        onChange={value => changeLangHandler(value)}
        options={Country}
        value={value!}
        // width={'163px'}
      />
    </div>
  )
}
