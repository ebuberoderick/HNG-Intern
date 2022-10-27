const linkButton = (props) => {
    return ( 
        <a id={props.id} href={props.linkName} target="_blank" rel="noreferrer" className="bg-gray-200 block text-lg py-3 rounded-md text-center">
            {props.displayName}
        </a>
    );
}
 
export default linkButton;