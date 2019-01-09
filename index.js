/** @format */

import { Navigation } from "react-native-navigation";

import Home from './Screens/Home'
import Red from './Screens/Red'
import Green from './Screens/Green'
import Blue from './Screens/Blue'
import Yellow from './Screens/Yellow'

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Red', () => Red);
Navigation.registerComponent('Green', () => Green);
Navigation.registerComponent('Blue', () => Blue);
Navigation.registerComponent('Yellow', () => Yellow);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack:{
                id: 'AppStack',
                children: [
                    {
                        component: {
                            name: 'Home'
                        },
                    },
                ]
            }
        }
    });

});