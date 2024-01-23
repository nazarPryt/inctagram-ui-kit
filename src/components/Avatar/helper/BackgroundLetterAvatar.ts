const stringToColor = (string: string) => {
  let hash = 0
  let i

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff

    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}

export const stringAvatar = (name: string) => {
  let children = ''

  if (name.split(' ').length === 2) {
    children = `${name.split(' ')[0][0].toUpperCase()} ${name.split(' ')[1][0].toUpperCase()}`
  }
  if (name.split(' ').length === 1) {
    children = `${name.split(' ')[0][0].toUpperCase()}`
  }

  return {
    children,
    style: {
      backgroundColor: stringToColor(name),
    },
  }
}
//https://mui.com/material-ui/react-avatar/
