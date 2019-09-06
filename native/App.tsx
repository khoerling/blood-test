import React from 'react'
import { Text, View } from 'react-native'
// import { Questionaires, QuestionGroups, Questions } from 'questions'
import cssta from 'cssta/native'
import { BottomCarousel } from './src/components/BottomCarousel'

const App = cssta(View)`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`

export default () => (
  <App>
    <Text>YO</Text>
    <BottomCarousel />
  </App>
)
