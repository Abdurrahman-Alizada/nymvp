
import { Appbar, Text, useTheme } from 'react-native-paper';

export default function GeneralAppbar({ navigation, back, title }) {
  const theme = useTheme()
  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.background }}  >
      {/* {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null} */}
      <Appbar.BackAction onPress={()=>navigation?.goBack()} />
      <Text style={{ fontSize: 16, fontWeight: "800" }}>{title}</Text>
   
    </Appbar.Header>
  );
}