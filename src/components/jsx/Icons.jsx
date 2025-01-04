function Icons(props) {
    return (
      <a className="dock-button" key={props.id} href={props.link} target="_blank" rel="noopener noreferrer" aria-label={props.name}>
        <img src={props.src} alt={props.name} />
      </a>
    );
  }
  
  export default Icons;
  