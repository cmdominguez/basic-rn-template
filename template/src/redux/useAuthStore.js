//@flow
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GLOBAL_CONFIG } from '../configuration';
const { AUTH_TOKEN } = GLOBAL_CONFIG;

const { setItem, removeItem } = AsyncStorage;

export const useAuthStore = create(devtools((set, get) => ({
    auth: {
        token: null,
    },
    setToken: async (token) => {
        //TODO - Add logic to get user data
        set(state => produce(state, draft => {
            draft.auth.token = token;
        }));
    },
    login: async () => {
        //TODO - Add logic to send POST
        await setItem(AUTH_TOKEN, 'secret');
        set(state => produce(state, draft => {
            draft.auth.token = 'secret';
        }));
    },
    logout: async () => {
        //TODO - Add logic to send POST
        await removeItem(AUTH_TOKEN);
        set(state => produce(state, draft => {
            draft.auth.token = null;
        }))
    }
})));
