import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps116042Navigator from '../features/Maps116042/navigator';
import Add-Item116041Navigator from '../features/Add-Item116041/navigator';
import Maps116037Navigator from '../features/Maps116037/navigator';
import UserProfile116033Navigator from '../features/UserProfile116033/navigator';
import Maps115970Navigator from '../features/Maps115970/navigator';
import Add-Item115969Navigator from '../features/Add-Item115969/navigator';
import Maps115965Navigator from '../features/Maps115965/navigator';
import UserProfile115961Navigator from '../features/UserProfile115961/navigator';
import BlankScreen0115938Navigator from '../features/BlankScreen0115938/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps116042: { screen: Maps116042Navigator },
Add-Item116041: { screen: Add-Item116041Navigator },
Maps116037: { screen: Maps116037Navigator },
UserProfile116033: { screen: UserProfile116033Navigator },
Maps115970: { screen: Maps115970Navigator },
Add-Item115969: { screen: Add-Item115969Navigator },
Maps115965: { screen: Maps115965Navigator },
UserProfile115961: { screen: UserProfile115961Navigator },
BlankScreen0115938: { screen: BlankScreen0115938Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
