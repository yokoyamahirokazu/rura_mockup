import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#8ADAFF',
      100: '#63CEFF',
      200: '#40C3FF',
      300: '#20B9FF',
      400: '#04B0FF',
      500: '#00A0E9',
      600: '#008ECF',
      700: '#007EB8',
      800: '#0070A4',
      900: '#006492',
    },
    variants: {
      200: '#D7EBF5',
      300: '#B5DBED',
      400: '#96CCE6',
      500: '#7ABFDF',
      600: '#5EB2DB',
      700: '#45A6D2',
      800: '#319ACA',
      900: '#2C8BB6',
    },
    secondary: {
      100: '#FFFEE9',
      200: '#FFFDBD',
      300: '#FFFB95',
      400: '#FFF970',
      500: '#FFF84F',
      600: '#FFF72E',
      700: '#FFF610',
      800: '#F4EB00',
      900: '#DCD400',
    },
    background: {
      1: '#FFF',
      2: '#F7F7F7',
    },
    error: {
      50: '#F7A3B1',
      100: '#F48194',
      200: '#F1627A',
      300: '#EF4662',
      400: '#ED2C4C',
      500: '#EB1438',
      600: '#D31232',
      700: '#BE102D',
      800: '#AB0E29',
      900: '#9A0D25',
    },
    dark: {
      50: '#E9E9E9',
      100: '#DCDCDC',
      200: '#C4C4C4',
      300: '#ACACAC',
      400: '#939393',
      500: '#EB1438',
    },
    darkRgba: {
      50: 'rgba(0,0,0,0.08)',
      100: 'rgba(0,0,0,0.14)',
      200: 'rgba(0,0,0,0.24)',
    },
  },
  fonts: {
    heading: 'SF Pro Display',
    body: 'SF Pro Display',
  },
})
