import React, { Component } from 'react'
import {Text} from 'react-native'
import * as D from '../data'

const Person = D.createRandomPerson()
export default class ClassComponents extends Component {
    render() {
        return <Text>s{JSON.stringify(Person, null, 2)}</Text>
    }
}