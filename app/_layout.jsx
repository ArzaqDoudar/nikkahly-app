import SafeScreen from "@/components/SafeScreen";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

function RootContent() {
  const { isLoggedIn } = useAuth();
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);
  if (isSplashVisible) return <SplashScreen />;

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeScreen>
        <RootContent />
      </SafeScreen>
    </AuthProvider>
  );
}
