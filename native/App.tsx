import { useState } from 'react'
import { Text, View, StatusBar } from 'react-native'
import cssta from 'cssta/native'
import Modal from 'react-native-modalbox'

// import { Questionaires, QuestionGroups, Questions } from 'questions'
import { BottomCarousel } from './src/components/BottomCarousel'
import { Payment } from './src/components/Payment'

const App = cssta(View)`
    flex: 1;
    marginTop: 40;
  `,
  ModalContainer = cssta(View)`
    flex: 1;
    background: #fff;
    justifyContent: center;
    alignItems: center;
    marginTop: 100;
  `,
  Head = cssta(View)`
    marginTop: 10px;
  `,
  H1 = cssta(Text)`
    lineHeight: 24px;
    margin: 0 30px 25px;
    fontSize: 22;
  `,
  H2 = cssta(Text)`
    textAlign: justify;
    lineHeight: 24px;
    margin: 0 30px;
    fontSize: 16;
  `,
  entries = require('./src/static/fake_tests.json')

// XXX does this work on android?
// // init stripe
// Stripe.setOptionsAsync({
//   publishableKey: 'pk_test_xKDupS5AmFXBdTPfNaaPqfsO00LcCJ9kT1',
//   androidPayMode: 'test',
//   merchantId: 'your_merchant_id' // [optional] used for payments with ApplePay
// })

export default () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false),
    [selectedTest, setSelectedTest] = useState<number>(0),
    hideModal = _ => setModalVisible(false)
  return (
    <App>
      <StatusBar hidden={true} />
      <Modal useNativeDriver={false} coverScreen={false} isOpen={modalVisible}>
        <ModalContainer>
          <H1>Selected Test {selectedTest + 1}</H1>
          <Payment />
        </ModalContainer>
      </Modal>
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
        setModalVisible={setModalVisible}
        onSnapToItem={setSelectedTest}
        entries={entries}
      />
    </App>
  )
}
