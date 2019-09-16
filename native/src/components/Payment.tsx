import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import cssta from 'cssta/native'
import { paymentRequest } from '../api/card'

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
      <TouchableOpacity onPress={paymentRequest}>
        <Text>PAY</Text>
      </TouchableOpacity>
    </Container>
  )

export { Payment }
