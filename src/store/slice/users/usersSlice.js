import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { fetchUsers } from './usersAPI'

const userSlice = createSlice({
    name: 'users',
    initialState: {
        currentUser: {},
        usersData: [],
    },
    reducers: {
        setCurrentUser(state, { payload }) {

            const testUser = { ...state.usersData.find(user => user.email === payload.logEmail && user.password === payload.logPass) }
            return testUser.id ? {
                ...state,
                currentUser: testUser,
            } : state
        },

        addNewUser(state, { payload }) {
            console.log(payload);
            return {
                ...state,
                usersData: [
                    ...state.usersData,
                    {
                        cart: [],
                        email: payload.email,
                        id: new Date().getTime().toString(),
                        name: {
                            firstname: payload.firstName,
                            lastname: payload.lastName,
                        },
                        password: payload.password,
                        confirmpass: payload.confirmPassword,
                        phone: payload.phoneNumber,
                        username: payload.username,
                        __v: 0,
                    }
                ]
            }
        },

        logOutUser(state) {
            return {
                ...state,
                currentUser: {}
            }
        },
        addToCard(state, { payload }) {
            let idxUser = state.usersData.findIndex(item => item.id === state.currentUser.id);

            let idx = state.currentUser.cart.findIndex(item => item.id === payload.id);

            if (idx !== -1) {
                state.usersData[idxUser].cart[idx].count += payload.count

                state.currentUser.cart[idx].count += payload.count
            } else {
                state.usersData[idxUser].cart.push(payload)
                state.currentUser.cart.push(payload)
            }
        },

        incrementCount: (state, { payload }) => {
            let idxUser = state.usersData.findIndex(item => item.id === state.currentUser.id);

            let idx = state.currentUser.cart.findIndex(el => el.id === payload.id);

            if (idx !== -1) {
                state.usersData[idxUser].cart[idx].count += 1
                state.currentUser.cart[idx].count++
            }
        },
        decrementCount: (state, { payload }) => {
            let idxUser = state.usersData.findIndex(item => item.id === state.currentUser.id);

            let idx = state.currentUser.cart.findIndex((el) => el.id === payload.id);

            if (state.currentUser.cart[idx].count > 1) {
                state.usersData[idxUser].cart[idx].count -= 1
                state.currentUser.cart[idx].count--
            } else {
                state.usersData[idxUser].cart[idx].count = 1
                state.currentUser.cart.count.count = 1
            }
        },

        deleteItem(state, { payload }) {
            let idxUser = state.usersData.findIndex(item => item.id === state.currentUser.id);

            const removeUserItem = state.usersData[idxUser].cart.filter((el) => el.id !== payload.id)
            const removeItem = state.currentUser.cart.filter((el) => el.id !== payload.id);

            state.currentUser.cart = removeItem;
            state.usersData[idxUser].cart = removeUserItem
        },

        deleteAll(state){
            let idxUser = state.usersData.findIndex(item => item.id === state.currentUser.id);
            
            state.currentUser.cart = []
            state.usersData[idxUser].cart = []

        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                usersData: [...state.usersData, ...payload],
            }
        }
    }
})

export const { setCurrentUser, addNewUser, logOutUser, addToCard, incrementCount, decrementCount, deleteItem, deleteAll } = userSlice.actions

export const usersReducer = userSlice.reducer

export const selectUsers = state => state.users