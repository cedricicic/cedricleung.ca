function Icons(props){
return(
    <img className = "dock-icon" key = {props.id} src = {props.src} alt = {props.name}/>
)
}
export default Icons;