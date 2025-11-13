import { Text, View } from "react-native";
import LogoCard from "../../components/LogoCard";
import { FONTS } from "../../constants/fonts";

const home = () => {
  return (
    <View>
      <Text style={FONTS.display_2xl.bold}>home</Text>
      <LogoCard />
    </View>
  );
};

export default home;
