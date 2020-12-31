import { Navigation } from 'react-native-navigation';
import { SCREENS } from '_screens';
import { useAuthStore } from '_redux';
import SCREEN_NAMES from '_screens/SCREEN_NAMES';

export function registerScreens() {
    //Register Screens
    Object.keys(SCREENS).map((screen) => {
        Navigation.registerComponent(screen, () => SCREENS[screen])
    });
    Navigation.events().registerAppLaunchedListener(() => {
        setRoot(SCREEN_NAMES.BOOT_SCREEN)
    });
}


export function setRoot(screen) {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: screen
                        }
                    }
                ]
            }
        }
    });
}

const storeSubscription = useAuthStore.subscribe((auth, previousAuth) => {
    if (!previousAuth.token && auth.token) {
        setRoot('HOME')
    }
    if (previousAuth.token && !auth.token) {
        setRoot('LOGIN')
    }
}, state => state.auth);
