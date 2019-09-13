import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Platform
} from 'react-native'
import cssta from 'cssta/native'
import { CreditCardInput } from 'react-native-credit-card-input'
import { scanCard } from '../api/card'

const { width: screenWidth } = Dimensions.get('window'),
  Container = cssta(View)`
    marginTop: 20;
  `,
  Title = cssta(Text)`
    fontSize: 15;
    textAlign: center;
    marginTop: 10;
  `,
  ScanButton = cssta(TouchableOpacity)`
    position: absolute;
    left: 0;
    top: 185;
    right: 0;
    textAlign: center;
  `,
  Payment = () => (
    <Container>
      <CreditCardInput
        labels={{}}
        allowScroll={false}
        onChange={this._onChange}
      />
      <ScanButton onPress={scanCard}>
        <Title>Scan Card</Title>
      </ScanButton>
    </Container>
  )

export { Payment }
