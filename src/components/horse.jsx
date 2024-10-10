import './Horse.css'
export const Horse = (props) => {

    return(
        <div className='horse' name={props.name} onClick={() => console.log(props.name)}><img src={props.urlPicture}/></div>
    )
};