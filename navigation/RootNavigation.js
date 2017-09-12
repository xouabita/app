import {StackNavigator} from "react-navigation"

import HomeScreen from "../screens/HomeScreen"
import AddDeviceScreen from "../screens/AddDeviceScreen"
import ChooseWifiScreen from "../screens/ChooseWifiScreen"

export default StackNavigator({
  Home: {screen: HomeScreen},
  AddDevice: {screen: AddDeviceScreen},
  ChooseWifi: {screen: ChooseWifiScreen},
})
