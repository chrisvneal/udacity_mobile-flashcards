import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DeckList from "./src/screens/DeckList";

const navigator = createStackNavigator({
  HomeScreen: DeckList
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    title: 'App'
  }
})



export default createAppContainer(navigator)