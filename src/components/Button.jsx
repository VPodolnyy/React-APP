export const Button = (props) => {
    return (
        <>
            <button
            type={props.type || 'button'}
            // className={`${styles.button} ${this.props.className}`}
            name={props.name}
            disabled={props.disabled || false}
            onClick={props.onClick}
            >{props.name || props.children}</button>
        </>
    )
}