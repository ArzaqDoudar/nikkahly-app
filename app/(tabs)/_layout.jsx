import { useAuth } from "@/context/AuthContext";
import { Image } from "expo-image";
import { Tabs } from "expo-router";
import CalendarIcon from "../../assets/icons/calendar-icon.svg";
import DashboardIcon from "../../assets/icons/dashboard-icon.svg";
import HomeIcon from "../../assets/icons/home-icon.svg";
import MessageIcon from "../../assets/icons/message-icon.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";
import ProfileIcon from "../../assets/icons/user-profile-icon.svg";
import { COLORS } from "../../constants/colors";

const TabsLayout = () => {
  const { isOfficant } = useAuth();

  return (
    <Tabs
      initialRouteName={isOfficant ? "dashboard" : "home"}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray[500],
        tabBarStyle: {
          backgroundColor: COLORS.red[50],
          paddingTop: 10,
          height: 80,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", marginTop: 4 },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          href: isOfficant ? "(tabs)/dashboard" : null,
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={DashboardIcon}
              style={{
                tintColor: color,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          href: isOfficant ? "(tabs)/calendar" : null,
          title: "Calender",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={CalendarIcon}
              style={{
                tintColor: color,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          href: isOfficant ? null : "(tabs)/home",
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={HomeIcon}
              style={{
                tintColor: color,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: isOfficant ? null : "(tabs)/search",
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={SearchIcon}
              style={{
                tintColor: color,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={MessageIcon}
              style={{
                tintColor: color,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={ProfileIcon}
              style={{
                tintColor: color,
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
