/** @format */

import { Navigation } from "react-native-navigation";
import App from './App';
import App2 from './App2';

Navigation.registerComponent('tab1', () => App);
Navigation.registerComponent('tab2', () => App2);

Navigation.events().registerAppLaunchedListener(() => {
//     Navigation.setRoot({
//         root: {
//             stack: {
//                 children: [{
//                     component: {
//                         name: 'tab1',
//                         passProps: {
//                             text: 'stack with one child'
//                         }
//                     }
//                 }],
//                 options: {
//                     topBar: {
//                         title: {
//                             text: 'Welcome screen'
//                         }
//                     }
//                 }
//             }
//         }
//     });
// });

    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [{
                    stack: {
                        children: [{
                            component: {
                                name: 'tab1',
                                passProps: {
                                    text: 'This is tab 1'
                                }
                            }
                        },
                            {
                                component: {
                                    name: 'tab1',
                                    passProps: {
                                        text: 'This is tab 1'
                                    }
                                }
                            },
                        ],

                        options: {
                            bottomTab: {
                                text: 'Tab 1',
                                icon: require('./image/one.png'),
                                testID: 'FIRST_TAB_BAR_BUTTON'
                            }
                        }
                    }
                },
                    {
                        component: {
                            name: 'tab2',
                            passProps: {
                                text: 'This is tab 2'
                            },
                            options: {
                                bottomTab: {
                                    text: 'Tab 2',
                                    icon: require('./image/two.png'),
                                    testID: 'SECOND_TAB_BAR_BUTTON'
                                }
                            }
                        }
                    }]
            }
        }
    });

});