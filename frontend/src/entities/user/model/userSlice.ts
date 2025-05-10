import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser, TUserRole } from './user-types'

const initialState: IUser = {
	id: '',
	email: '',
	firstName: '',
	lastName: '',
	role: 'parent',
	city: '',
	birthDate: '',
	isAuth: false,
	isLoading: false,
	error: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginStart(state) {
			state.isLoading = true
			state.error = null
		},

		loginSuccess(
			state,
			action: PayloadAction<{
				id: string
				email: string
				firstName: string
				lastName: string
				role: TUserRole
				city: string
				birthDate: string
			}>
		) {
			state.isAuth = true
			state.isLoading = false
			state.error = null
			Object.assign(state, action.payload)
		},

		loginFailure(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		},

		updateProfile(
			state,
			action: PayloadAction<{
				firstName?: string
				lastName?: string
				city?: string
				birthDate?: string
			}>
		) {
			Object.assign(state, action.payload)
		},

		changeCity(state, action: PayloadAction<string>) {
			state.city = action.payload
		},

		logout(state) {
			Object.assign(state, {
				...initialState,
				city: state.city,
				role: state.role
			})
		}
	}
})

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	updateProfile,
	changeCity,
	logout
} = userSlice.actions

export default userSlice.reducer
