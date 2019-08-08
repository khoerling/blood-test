import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Questionaires, QuestionGroups, Questions } from 'questions'

// a simple App to read & separate our data with types: Questionaires -> Question Group -> Question
export default function App() {
  return (
    <View style={styles.container}>
      {
        Object.keys(Questionaires()).map(test => (
          // tests
          <View style={styles.row}>
            <Text style={styles.h1}>* {test}</Text>
            {QuestionGroups(test).map(qg => (
              // question groups
              <View style={styles.row}>
                <Text style={styles.h2}>- {qg}</Text>
                {Questions(test, qg).map(q => (
                  // questions
                  <Text style={[styles.row, styles.question]}>
                    {q}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginLeft: 75,
  },
  row: {
    flexDirection: 'column',
  },
  h1: {
    fontSize: 20,
  },
  h2: {
    fontSize: 15,
    marginLeft: 10,
  },
  question: {
    fontSize: 12,
    marginLeft: 25,
  }
})
