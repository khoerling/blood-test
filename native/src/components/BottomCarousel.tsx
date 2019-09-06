import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native'
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel'
import cssta from 'cssta/native'

const { width: screenWidth } = Dimensions.get('window'),
  Title = cssta(Text)`
    fontSize: 30rem;
    textAlign: center;
    marginTop: 10;
  `,
  renderItem = ({ item }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.thumbnail }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Title numberOfLines={2}>{item.title}</Title>
      </View>
    )
  },
  BottomCarousel = ({ entries }) => (
    <Carousel
      sliderWidth={screenWidth}
      sliderHeight={screenWidth}
      itemWidth={screenWidth - 60}
      data={entries}
      loop={true}
      activeAnimationType="decay"
      containerCustomStyle={{
        position: 'absolute',
        bottom: 50
      }}
      renderItem={renderItem}
      hasParallaxImages={true}
    />
  )

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'
  }
})
export { BottomCarousel }
