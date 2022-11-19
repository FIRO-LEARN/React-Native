import React from 'react'
import {Text} from 'react-native'


export default function App() {
    console.log('text')
    const textElement = React.createElement(Text, null, '헤엘러우 워얼드응')
    return textElement    
}