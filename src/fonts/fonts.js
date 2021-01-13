import { createGlobalStyle } from 'styled-components'

import EastSeaDokdoRegular from './EastSeaDokdoRegular.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'East Sea Dokdo', cursive;
        src: local('EastSeaDokdoRegular'),
        url(${EastSeaDokdoRegular}) format('ttf'),
        font-weight: 300;
        font-style: normal;
    }
`
