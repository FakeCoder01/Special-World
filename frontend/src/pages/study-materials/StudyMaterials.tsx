import styles from './study-materials.module.scss'
import { InputSearch } from '@/shared'
import { Layout } from '@/widgets'

const StudyMaterials = () => {
	return (
		<Layout
			headerContent={<InputSearch placeholder='Поиск игр и материалов' />}
		>
			<div className={styles.studyMaterials}>
				<div className={styles.course}>
					<h2>Математика, счет</h2>
					<p className={styles.description}></p>
					<div className={styles.footer}>
						<p></p>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default StudyMaterials
