import cn from 'classnames'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppSelector } from '@/shared/lib/hooks/redux'

import {
	DocumentationSidebar,
	HomeSidebar,
	StudyMaterialsSidebar
} from './components'
import styles from './right-sidebar.module.scss'

const RightSidebar: FC = () => {
	const { pathname } = useLocation()
	const isRightSidebarOpen = useAppSelector(
		state => state.sidebar.isRightSidebarOpen
	)

	const renderContent = () => {
		switch (pathname) {
			case '/documentation':
				return <DocumentationSidebar />
			case '/':
				return <HomeSidebar />
			case '/study-materials':
				return <StudyMaterialsSidebar />
			default:
				return <HomeSidebar />
		}
	}

	return (
		<aside
			className={cn(styles.rightSidebar, { [styles.open]: isRightSidebarOpen })}
		>
			<div className={styles.rightSidebarContent}>{renderContent()}</div>
		</aside>
	)
}
export default RightSidebar
