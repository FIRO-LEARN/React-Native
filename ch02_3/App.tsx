import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import ClassComponents from './src/screens/ClassComponents'
import ArrowComponents from './src/screens/ArrowComponents'

export default function App() {
    return (
    <SafeAreaView>
        <ClassComponents/>
        <ArrowComponents/>
    </SafeAreaView>
    )
}