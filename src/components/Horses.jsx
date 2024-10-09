import './Horses.css'
export const Horses = (props) => <div className='horse' data-name={props.name}><img src={props.urlPicture}/></div>;