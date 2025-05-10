import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import { MdOutlineFileDownload } from 'react-icons/md'
import { PiShareFat } from 'react-icons/pi'

import styles from './documentation.module.scss'
import { InputSearch, Typography } from '@/shared'
import { Layout } from '@/widgets'

const Documentation = () => {
	const [isFavorite, setIsFavorite] = useState(false)
	return (
		<Layout headerContent={<InputSearch placeholder='Поиск документов' />}>
			<section className={styles.documentation}>
				<div className={styles.document}>
					<Typography variant='text'>
						Об организации основного общего образования обучающихся с ОВЗ в
						2021-2022 учебном году (Письмо Минпросвещения России от 27.08.2021 №
						АБ-1362/07)
					</Typography>

					<div className={styles.actions}>
						<button>
							<PiShareFat />
						</button>
						<button>
							<MdOutlineFileDownload />
						</button>
						<button onClick={() => setIsFavorite(prev => !prev)}>
							{isFavorite ? <FaStar color='#FFD700' /> : <FiStar />}
						</button>
					</div>
				</div>
				<div className={styles.document}>
					<Typography variant='text'>
						Об организации основного общего образования обучающихся с ОВЗ в
						2021-2022 учебном году (Письмо Минпросвещения России от 27.08.2021 №
						АБ-1362/07)
					</Typography>

					<div className={styles.actions}>
						<button>
							<PiShareFat />
						</button>
						<button>
							<MdOutlineFileDownload />
						</button>
						<button onClick={() => setIsFavorite(prev => !prev)}>
							{isFavorite ? <FaStar color='#FFD700' /> : <FiStar />}
						</button>
					</div>
				</div>
			</section>
		</Layout>
	)
}
export default Documentation
