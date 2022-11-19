import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import ClassComponents from './src/screens/ClassComponents'
import ArrowComponents from './src/screens/ArrowComponents'
import Person from './src/screens/Person'
import * as D from './src/data'

const person = D.createRandomPerson()
export default function App() {
    return (
    <SafeAreaView>
        <ClassComponents/>
        <ArrowComponents/>
        <Person person={person}/>
    </SafeAreaView>
    )
}