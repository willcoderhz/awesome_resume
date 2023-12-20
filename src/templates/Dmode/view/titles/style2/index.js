import { jsx as _jsx } from "react/jsx-runtime";
import styles from './index.module.scss';
export const TitleStyle2 = (props) => {
    const { value } = props;
    return (_jsx("div", { className: styles.index, children: _jsx("div", { className: styles.text, children: value }) }));
};
TitleStyle2.defaultProps = {};
