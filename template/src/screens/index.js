import SCREEN_NAMES from '_screens/SCREEN_NAMES';
import Login from '_screens/Login';
import Home from '_screens/Home';
import BootScreen from '_screens/BootScreen';

export const SCREENS = {
    [SCREEN_NAMES.BOOT_SCREEN]: BootScreen,
    [SCREEN_NAMES.LOGIN]: Login,
    [SCREEN_NAMES.HOME]: Home,
};
