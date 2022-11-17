
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import {apiChart} from '../store/apiChart';
import './chart.css';

export default function Chart()
{
	const {data: {time, values} = {}} = apiChart.useLoadQuery();

	const options = {
		accessibility: {enabled: false},
		chart: {type: 'spline', zoomType: 'x', styledMode: true},
		title: {text: '<b>График Напряжения Холодильной Установки</b>'},
		subtitle: {text: 'Для увеличения - нажмите на график и потяните'},
		credits: {enabled: false},
		legend: {enabled: false},
		tooltip: {crosshairs: true},
		plotOptions: {spline: {lineWidth: 2, states: {hover: {lineWidth: 2}}, marker: {enabled: false}}},
		xAxis: {categories: time, title: {text: 'Дата и время'}},
		yAxis: {title: {text: 'Напряжение, В'}},
		series: [{name: ' ', data: values}]
	}

	return <div className='inline-block w-90'>
		{values ? <HighchartsReact highcharts={Highcharts} options={options} /> : <h1>Загрузка...</h1>}
	</div>
}
