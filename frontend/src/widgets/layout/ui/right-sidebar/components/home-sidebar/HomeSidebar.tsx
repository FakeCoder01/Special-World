import { format, getDay, parse, startOfWeek } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useState } from 'react'
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import styles from './home-sidebar.module.scss'

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek: date => startOfWeek(date, { weekStartsOn: 1 }),
	getDay,
	locales: {
		'ru-RU': ru
	}
})

const weekdaysShort = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const CustomWeekHeader = ({ date }) => {
	const day = date.getDay()
	const index = (day + 6) % 7
	return <span>{weekdaysShort[index]}</span>
}

const HomeSidebar = () => {
	const [date, setDate] = useState(new Date())

	return (
		<div className={styles.homeSidebar}>
			<div className={styles.calendar} style={{ height: '250px' }}>
				<BigCalendar
					localizer={localizer}
					date={date}
					onNavigate={setDate}
					defaultView='month'
					views={['month']}
					events={[]}
					startAccessor='start'
					endAccessor='end'
					messages={{
						next: '→',
						previous: '←',
						today: 'Сегодня',
						month: 'Месяц',
						week: 'Неделя',
						day: 'День',
						agenda: 'Повестка дня'
					}}
					components={{
						header: CustomWeekHeader
					}}
				/>
			</div>
		</div>
	)
}
export default HomeSidebar
