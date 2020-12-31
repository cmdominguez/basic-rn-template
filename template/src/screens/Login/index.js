import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuthStore } from '_redux';

const Login = () => {

    const { login } = useAuthStore();

    return (
        <View>
            <Text>Agregar formulario de autenticacion</Text>
            <TouchableOpacity
                onPress={login}
            >
                <Text>LOGIN SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
