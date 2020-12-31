import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuthStore } from '_redux';

const Home = () => {

    const { logout } = useAuthStore();

    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity
                onPress={logout}
            >
                <Text>LOGOUT BUTTON</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Home;
