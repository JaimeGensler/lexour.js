type Props = { className?: string };

export default function LexourIcon({ className }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 50 50"
            version="1.1"
            aria-hidden="true"
        >
            <path
                fill="currentColor"
                d="M29.52,8.17,23.28,35.36a3,3,0,0,0,.83,2.91,5.6,5.6,0,0,0,3,1.28,10.91,10.91,0,0,0,2.26.1,16.39,16.39,0,0,0,2.22-.34l.5,2.38a12.07,12.07,0,0,1-2.44.46,13,13,0,0,1-3.2-.11,7.91,7.91,0,0,1-4.7-2.34,5.36,5.36,0,0,1-1.35-4.78l5.33-23.54-8,.92.38-2.54Z"
            />
            <polygon
                fill="currentColor"
                points="16.18 19.25 7.25 24.54 16.18 29.83 16.18 33.4 1.78 24.54 16.18 15.76 16.18 19.25"
            />
            <polygon
                fill="currentColor"
                points="48.22 24.54 33.82 33.4 33.82 29.83 42.79 24.54 33.82 19.25 33.82 15.76 48.22 24.54"
            />
        </svg>
    );
}
