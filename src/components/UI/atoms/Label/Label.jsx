import classNames from "classnames"

import styles from "./label.module.scss"

const Label = ({children, className, ...rest}) => {
    return (
        <label className={classNames(styles.text, className)} {...rest}>
            {children}
        </label>
    )
}

export default Label
