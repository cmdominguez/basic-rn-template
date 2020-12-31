import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuthStore } from '_redux';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GLOBAL_CONFIG } from '_configuration';
import * as LayoutManager from '_navigation';
import SCREEN_NAMES from '_screens/SCREEN_NAMES';

const { AUTH_TOKEN } = GLOBAL_CONFIG;
const { getItem } = AsyncStorage;


const BootScreen = () => {

    const { setToken } = useAuthStore();

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = await getItem(AUTH_TOKEN);
                if (userToken) {
                    setToken(userToken);
                } else {
                    throw "NO_TOKEN";
                }
            } catch (e) {
                LayoutManager.setRoot(SCREEN_NAMES.LOGIN)
            }
        };

        bootstrapAsync();
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};

//Navigation options
BootScreen.options = {
    topBar: {
        visible: false,
    },
};

export default BootScreen;
