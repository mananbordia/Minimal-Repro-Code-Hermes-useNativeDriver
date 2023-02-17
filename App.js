import {Animated} from 'react-native';
import {useRef, useEffect, useState} from 'react';

const TIMECONST = 20000000; // Replace this with 2000000 to see the animation even with native driver
const CountDown = () => {
  const [timeLeft,_] = useState(TIMECONST);
  const [totalDuration, __] = useState(2 * TIMECONST);
  const progressRef = useRef(new Animated.Value(Math.min(timeLeft / totalDuration, 1))).current;

  useEffect(() => {
    console.log('Animation started...');
    Animated.timing(progressRef, {
      toValue: 0,
      duration: timeLeft,
      useNativeDriver: true, // Set this to true and it will work with hermes engine
    }).start(() => {
      console.log('Callback function for animation');
    });

    return () => progressRef.stopAnimation();
  }, []);

  const width = 200;
  const animatedScale = progressRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width]
  })

  return <Animated.View
        style={{
          width: 1,
          height: 20,
          alignSelf: 'center',
          transform: [{ scaleX: animatedScale }],
          marginTop: 100,
          backgroundColor: 'red',
        }}
      />
}

export default CountDown;