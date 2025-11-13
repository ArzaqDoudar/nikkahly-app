import { useAuth } from "@/context/AuthContext";
import { Redirect, Stack } from "expo-router";
import { StyleSheet } from "react-native";

const AuthLayout = () => {
  const { isOfficant, isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <Redirect href={isOfficant ? "/(tabs)/dashboard" : "/(tabs)/home"} />
    );
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
