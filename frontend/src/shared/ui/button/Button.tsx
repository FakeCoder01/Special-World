import { ComponentProps, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<ComponentProps<'button'>>> = ({
	children,
	...props
}) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}
export default Button
