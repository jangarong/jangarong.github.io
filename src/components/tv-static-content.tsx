import styles from './tv-static.module.css';

export default function TVStaticContent({ children }: { children: JSX.Element }) {
    return (
        <div>
            <div className={styles.tvSection + " z-10"}></div>
            {children}
            <svg className={"display-none absolute mt-[-200px]"}>
                <filter id="noise">
                    <feTurbulence id="turbulence">
                        <animate
                            attributeName="baseFrequency"
                            dur="2s"
                            values="0.9 0.9;0.8 0.8; 0.9 0.9"
                            repeatCount="indefinite"
                        ></animate>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
                </filter>
            </svg>
        </div>
    );
}
