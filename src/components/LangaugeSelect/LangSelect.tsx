import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {FlagRussiaIcon} from '../../assets/icons/FlagRussiaIcon'
import FlagEngIcon from '../../assets/icons/FlagUnitedKingdom.svg'
import {CustomSelect} from 'shared/ui/Select'

const Country = [
    {
        value: 'ru',
        label: (
            <>
                <FlagRussiaIcon />
                Русский
            </>
        ),
    },
    {
        value: 'en',
        label: (
            <>
                <FlagEngIcon />
                English
            </>
        ),
    },
]

export const LangSelect = () => {
    const {locale, push, pathname, query, asPath, locales, defaultLocale} = useRouter()
    const [value, setValue] = useState(defaultLocale)
    const changeLangHandler = (country: string) => {
        setValue(country)
        push({pathname, query}, asPath, {locale: country})
        localStorage.setItem('lang', country)
    }

    useEffect(() => {
        const lang = localStorage.getItem('lang')
        if (lang) {
            setValue(lang)
            push({pathname, query}, asPath, {locale: lang})
        } else {
            push({pathname, query}, asPath, {locale: defaultLocale})
        }
    }, [])

    return (
        <div>
            <CustomSelect
                value={value!}
                defaultValue={defaultLocale}
                onChange={value => changeLangHandler(value)}
                options={Country}
                // width={'163px'}
            />
        </div>
    )
}
