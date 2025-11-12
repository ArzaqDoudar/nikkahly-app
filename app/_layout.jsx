import SafeScreen from "@/components/SafeScreen";
import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

export default function RootLayout() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 4500); // duration of splash animation
    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) return <SplashScreen />;

  return (
    <SafeScreen>
      <Slot />
    </SafeScreen>
  );
}
