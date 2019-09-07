import React from 'react'
import { Text, View, StatusBar } from 'react-native'
// import { Questionaires, QuestionGroups, Questions } from 'questions'
import cssta from 'cssta/native'
import { BottomCarousel } from './src/components/BottomCarousel'

const App = cssta(View)`
    flex: 1;
    marginTop: 40;
  `,
  Head = cssta(View)`
    marginTop: 10px;
  `,
  H1 = cssta(Text)`
    lineHeight: 24rem;
    margin: 0 30px 25px;
    fontSize: 18rem;
  `,
  H2 = cssta(Text)`
    textAlign: justify;
    lineHeight: 24rem;
    margin: 0 30px;
    fontSize: 13rem;
  `,
  entries = require('./src/static/fake_tests.json')

export default () => (
  <App>
    <StatusBar hidden={true} />
    <Head>
      <H2>UPCOMING:</H2>
      <H1>Tomorrow @ Noon for Lipid Panel</H1>
    </Head>
    <H2>
      You've Come to the Right Place, Friend. Choose a Test and Prolong Your
      Health & Lifestyle:
    </H2>
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
