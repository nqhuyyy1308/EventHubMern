import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {appColors} from '../../constants/appColors';
import {appInfos} from '../../constants/appInfos';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles/globalStyle';
import {TextComponent} from '../../components';
import {fontFamilies} from '../../constants/fontFamilies';

type CarouselProps = {
  id: string;
  urlImg: ImageSourcePropType;
  title: string;
  desc: string;
};

const carouselItems: CarouselProps[] = [
  {
    id: 'onboarding-01',
    urlImg: require('../../assets/images/onboarding-1.png'),
    title: 'Explore Upcoming and Nearby Events',
    desc: 'In publishing and graphic design, Lorem is a placeholder text commonly',
  },
  {
    id: 'onboarding-02',
    urlImg: require('../../assets/images/onboarding-2.png'),
    title: 'Web Have Modern Events Calendar Feature',
    desc: 'In publishing and graphic design, Lorem is a placeholder text commonly',
  },
  {
    id: 'onboarding-03',
    urlImg: require('../../assets/images/onboarding-3.png'),
    title: 'To Look Up More Events or Activity Nearby By Map',
    desc: 'In publishing and graphic design, Lorem is a placeholder text commonly',
  },
];

const OnBoardingScreen = ({navigation}: any) => {
  const carouselRef = useRef<Carousel<CarouselProps> | null>(null);
  const [indexSelected, setIndexSelected] = useState(0);

  const onScrollIndexChanged = (index: number) => {
    setIndexSelected(index);
  };

  const onClickNext = () => {
    if (indexSelected < carouselItems.length - 1) {
      setIndexSelected(indexSelected + 1);
      carouselRef.current?.snapToItem(indexSelected + 1);
    }

    if (indexSelected === carouselItems.length - 1) {
      navigation.navigate('LoginScreen');
    }
  };

  const onClickSkip = () => {
    if (indexSelected > 0) {
      setIndexSelected(indexSelected - 1);
      carouselRef.current?.snapToItem(indexSelected - 1);
    }
  };

  const renderItem = (item: CarouselProps) => {
    return (
      <View style={styles.carouselContainer}>
        <Image source={item.urlImg} style={styles.carouselImg} />
        <View style={styles.carouselBottomContainer}>
          <Text style={styles.carouselTitle}>{item.title}</Text>
          <Text style={styles.carouselDesc}>{item.desc}</Text>
          <View style={styles.paginationContainer}>
            <TouchableOpacity
              onPress={onClickSkip}
              activeOpacity={indexSelected === 0 ? 1 : 0.2}>
              <TextComponent
                text="Skip"
                font={fontFamilies.medium}
                size={16}
                styles={
                  indexSelected === 0 ? styles.unclickBtn : styles.clickBtn
                }
              />
            </TouchableOpacity>
            <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={indexSelected}
              dotStyle={{backgroundColor: appColors.white}}
              inactiveDotStyle={styles.inactiveDot}
            />
            <TouchableOpacity onPress={onClickNext}>
              <TextComponent
                text={
                  carouselItems.length - 1 === indexSelected ? 'Login' : 'Next'
                }
                font={fontFamilies.medium}
                size={16}
                color={appColors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={globalStyles.container}
      edges={['left', 'right', 'top']}>
      <View>
        <Carousel
          ref={carouselRef}
          data={carouselItems}
          renderItem={({item}) => renderItem(item)}
          layout="default"
          sliderWidth={appInfos.sizes.WIDTH}
          itemWidth={appInfos.sizes.WIDTH}
          slideStyle={{width: appInfos.sizes.WIDTH}}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          onSnapToItem={onScrollIndexChanged}
          loop={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: appInfos.sizes.HEIGHT,
  },

  carouselImg: {
    height: appInfos.sizes.HEIGHT * 0.6,
    resizeMode: 'cover',
    flex: 0,
  },

  carouselBottomContainer: {
    flex: 1,
    backgroundColor: '#5669FF',
    paddingTop: 40,
    paddingHorizontal: 40,
    gap: 20,
    justifyContent: 'flex-start',
    borderTopStartRadius: 48,
    borderTopEndRadius: 48,
  },

  carouselTitle: {
    fontSize: 24,
    color: appColors.white,
    fontFamily: fontFamilies.medium,
    textAlign: 'center',
    lineHeight: 32,
  },

  carouselDesc: {
    fontSize: 16,
    color: appColors.white,
    fontFamily: fontFamilies.regular,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.8,
  },

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  inactiveDot: {
    backgroundColor: appColors.white,
    opacity: 20,
  },

  clickBtn: {
    color: appColors.white,
  },

  unclickBtn: {
    color: appColors.white,
    opacity: 0.5,
  },
});
