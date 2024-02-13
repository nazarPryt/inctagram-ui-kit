import Image from 'next/image'

import flagRus from '../../icons/flagRus.png'
import flagUK from '../../icons/flagUK.png'
import { SelectOptionType } from './Select'

export const options: SelectOptionType[] = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'QA manual',
    value: 'qa-internship',
  },
  {
    disabled: true,
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Blueberry',
    value: 'blueberry',
  },
  {
    label: 'Grapes',
    value: 'grapes',
  },
  {
    label: 'Pineapple',
    value: 'pineapple',
  },
  {
    label: 'Cherry',
    value: 'cherry',
  },
  {
    label: 'Grapefruit',
    value: 'grapefruit',
  },
  {
    label: 'Lemon',
    value: 'lemon',
  },
  {
    label: 'Mango',
    value: 'mango',
  },
]

export const optionsPagination: SelectOptionType[] = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    disabled: true,
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: 5,
    value: 5,
  },
  {
    label: 6,
    value: 6,
  },
]

export const optionsWithIcon: SelectOptionType[] = [
  {
    icon: <Image alt={'flagRus'} height={36} src={flagRus} width={36} />,
    label: 'Russian',
    value: 'ru',
  },
  {
    icon: <Image alt={'flagUK'} height={36} src={flagUK} width={36} />,
    label: 'English',
    value: 'en',
  },
]
