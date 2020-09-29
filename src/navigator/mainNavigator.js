import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item115969Navigator from '../features/Add-Item115969/navigator';
import Maps115965Navigator from '../features/Maps115965/navigator';
import UserProfile115961Navigator from '../features/UserProfile115961/navigator';
import BlankScreen0115938Navigator from '../features/BlankScreen0115938/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
