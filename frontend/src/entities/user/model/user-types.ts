export type TUserRole = 'parent' | 'child' | 'teacher' | 'admin'

export interface IUser {
	id: string
	email: string
	firstName: string
	lastName: string
	role: TUserRole
	city: string
	birthDate: string
	avatar?: string
	isAuth: boolean
	isLoading: boolean
	error: string | null
}

export interface IParentChildUser extends IUser {
	childId?: string
	parentId?: string
	school?: string
	class?: string
}

export interface TeacherUser extends IUser {
	subjects?: string[]
	groups?: string[]
	qualification?: string
}
