import './button.styles.scss';

// 3 types of buttons (default, inverted, signin)
const BUTTON_TYPE_CLASSES = {
    google:"google-sign-in",
    inverted: "inverted"
}

const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
        >{children}</button>
    )
}

export default Button;