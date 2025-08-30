import styles from './slide.module.css';

export enum SlideDirection {
    DOWN,
    UP,
    UP_REVERSE
}

export default function Slide({ children, dir }: { children: JSX.Element, dir: SlideDirection }) {
    let s = ''
    if (dir == SlideDirection.DOWN) {
        s = styles.slideTop
    } else if (dir === SlideDirection.UP) {
        s = styles.slideBottom
    } else if (dir === SlideDirection.UP_REVERSE) {
        s  = styles.slideBottomReverse
    }
    return (
        <div className={s}>
            {children}
        </div>
    );
}
