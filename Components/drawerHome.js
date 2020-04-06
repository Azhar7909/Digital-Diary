import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutPage from './aboutPage';
import HomePage from './HomePage';


const Drawer = createDrawerNavigator();

export default function DrawerHome() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="AboutPage" component={AboutPage} />
    </Drawer.Navigator>
  );
}


