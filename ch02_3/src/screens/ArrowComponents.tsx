import React, { Component } from 'react'
import {Text} from 'react-native'
import * as D from '../data'

const Person = D.createRandomPerson()
const ArrowComponent = () => {
    return <Text>{JSON.stringify(Person, null, 2)}</Text>
}

export default ArrowComponent