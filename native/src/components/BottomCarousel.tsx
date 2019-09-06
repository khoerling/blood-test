import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'
// import { Questionaires, QuestionGroups, Questions } from 'questions'
import cssta from 'cssta/native'

const { width: screenWidth } = Dimensions.get('window'),
  Container = cssta(View)`
    flex: 1;
    justifyContent: center;
    alignItems: center;
  `,
  BottomCarousel = ({ entries }) => <Text>BottomCarousel</Text>

export { BottomCarousel }
