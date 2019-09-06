import React from 'react'
import { Text, View } from 'react-native'
// import { Questionaires, QuestionGroups, Questions } from 'questions'
import cssta from 'cssta/native'
import { BottomCarousel } from './src/components/BottomCarousel'

const App = cssta(View)`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  marginTop: 40;
`,
  entries = require('./src/static/fake_tests.json')

export default () => (
  <App>
    <Text>Select a Test</Text>
    <BottomCarousel
      style={{
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'bottom'
      }}
      entries={entries}
    />
  </App>
)
