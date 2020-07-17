import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49036Navigator from '../features/BlankScreen49036/navigator';
import BlankScreen29034Navigator from '../features/BlankScreen29034/navigator';
import EmailAuth39033Navigator from '../features/EmailAuth39033/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49036: { screen: BlankScreen49036Navigator },
BlankScreen29034: { screen: BlankScreen29034Navigator },
EmailAuth39033: { screen: EmailAuth39033Navigator },

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
