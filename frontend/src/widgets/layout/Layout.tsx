import { FC, PropsWithChildren, ReactNode } from 'react'

import styles from './layout.module.scss'
import { Header, LeftSidebar, RightSidebar } from './ui'

interface ILayout extends PropsWithChildren {
	headerContent?: ReactNode
}

const Layout: FC<ILayout> = ({ children, headerContent }) => {
	return (
		<div className={styles.layout}>
			<Header headerContent={headerContent} />
			<div className={styles.page}>
				<LeftSidebar />
				<main className={styles.main}>{children}</main>
				<RightSidebar />
			</div>
		</div>
	)
}
export default Layout
