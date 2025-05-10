import { ComponentProps, FC } from 'react'
import { FiSearch } from 'react-icons/fi'

import styles from './input-search.module.scss'

interface IInputSearch extends ComponentProps<'input'> {
	placeholder?: string
}

const InputSearch: FC<IInputSearch> = ({ ...props }) => {
	return (
		<div className={styles.inputSearch}>
			<input {...props} />
			<FiSearch className={styles.icon} />
		</div>
	)
}
export default InputSearch
