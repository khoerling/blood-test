import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Questionaires } from '../shared/questionnaire'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ Object.keys(Questionaires()) }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
