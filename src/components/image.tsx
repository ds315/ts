
import "./image.css";

interface iView {pic: string, show: boolean, close: () => void}
interface iImage {img: string, view?: () => void}

export function View(props: iView)
{
	return <div className={props.show ? 'view show' : 'view hide'} onClick={props.close}>
		<img src={'http://asuprog.ru/img/' + props.pic} className='h-full mx-auto max-w-none' />
	</div>
}

export function Image(props: iImage)
{
	const path = 'http://asuprog.ru/img/' + props.img;

	return !props.view ? <img src={path} alt={props.img} className='float-left mr-2.5 h-107' />
		: props.img === 'new.png' ?
		<img src={path} className='float-right ml-5 cursor-pointer' title="Увеличить" onClick={props.view} />
		:
		<img src={path} className='float-left mr-1.5 cursor-pointer' title="Увеличить" onClick={props.view} />
}
