import { Image } from "expo-image";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";

// import SecLogo from "../assets/images/nikkahly-logo.png";
// import RedLogo from "../assets/images/red.png";

import NikkahlyLogoName from "../assets/images/logos/nikkahly-logo-name.png";
import PrimaryLogo from "../assets/images/logos/nikkahly-primary-logo.svg";
import SecondaryLogo from "../assets/images/logos/nikkahly-secondary-logo.svg";
import { COLORS } from "../constants/colors";
const PRIMARY = COLORS.primary;
const SECONDARY = COLORS.secondary;
const { width } = Dimensions.get("window");

export default function SplashScreen() {
  //   const router = useRouter();
  const [showPrimaryLogo, setShowPrimaryLogo] = useState(true);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const bgColor = useRef(new Animated.Value(0)).current;
  const logoTranslateX = useRef(new Animated.Value(0)).current;
  const nameOpacity = useRef(new Animated.Value(0)).current;
  const nameTranslateX = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.sequence([
      // Step 1: Zoom in
      Animated.delay(500),
      Animated.timing(scaleAnim, {
        toValue: 150,
        duration: 1000,
        useNativeDriver: true,
      }),

      // Step 2: Fade out the zoomed logo (remove it visually)
      Animated.timing(logoOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),

      // Step 3: Change background color
      Animated.timing(bgColor, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }),

      // Step 4: Show secondary logo and bring it back to normal size
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),

      // Step 5: Move logo left + fade in company name

      Animated.delay(100),
      Animated.parallel([
        Animated.timing(logoTranslateX, {
          toValue: -width * 0.2,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(nameOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(nameTranslateX, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),

      // Step 6: Wait then navigate
      Animated.delay(2000),
    ]).start(() => {
      //   router.replace("/home");
    });

    setTimeout(() => setShowPrimaryLogo(false), 1800);
  }, []);

  const backgroundColor = bgColor.interpolate({
    inputRange: [0, 1],
    outputRange: [SECONDARY, PRIMARY],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Animated.View
        style={[
          styles.logoWrapper,
          {
            opacity: logoOpacity,
            transform: [{ scale: scaleAnim }, { translateX: logoTranslateX }],
          },
        ]}
      >
        <Image
          source={
            showPrimaryLogo
              ? PrimaryLogo // first logo
              : SecondaryLogo // second logo
          }
          style={styles.logo}
        />
      </Animated.View>

      <Animated.Image
        source={NikkahlyLogoName}
        style={[
          styles.name,
          {
            opacity: nameOpacity,
            transform: [{ translateX: nameTranslateX }],
          },
        ]}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  name: {
    position: "absolute",
    left: width / 5,
    height: 300,
    width: 300,
  },
});
