import './Horses.css'
export const Horses = (props) => <div className='horse' data-name={props.name} data-isStarted = {props.isStarted ? alert('works') : 0}><img src={props.urlPicture}/></div>;