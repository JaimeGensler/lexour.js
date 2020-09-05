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
                d="M29.08,8.23a.3.3,0,0,1,.34.37L23.28,35.36a3,3,0,0,0,.83,2.91,5.6,5.6,0,0,0,3,1.28,10.91,10.91,0,0,0,2.26.1,15.49,15.49,0,0,0,1.93-.28.3.3,0,0,1,.35.23L32,41.41a.29.29,0,0,1-.2.36,13.54,13.54,0,0,1-2.18.38,13,13,0,0,1-3.2-.11,7.91,7.91,0,0,1-4.7-2.34,5.36,5.36,0,0,1-1.35-4.78L25.61,11.8a.3.3,0,0,0-.33-.37l-7.22.83a.3.3,0,0,1-.33-.35L18,10a.3.3,0,0,1,.26-.26Z"
            />
            <path
                fill="currentColor"
                d="M16,19.34,7.69,24.28a.3.3,0,0,0,0,.52L16,29.74a.3.3,0,0,1,.15.26v2.85a.3.3,0,0,1-.46.26L2.2,24.8a.31.31,0,0,1,0-.52L15.72,16a.3.3,0,0,1,.46.26v2.78A.3.3,0,0,1,16,19.34Z"
            />
            <path
                fill="currentColor"
                d="M47.8,24.8,34.28,33.11a.3.3,0,0,1-.46-.26V30a.32.32,0,0,1,.15-.26l8.37-4.94a.3.3,0,0,0,0-.52L34,19.34a.32.32,0,0,1-.15-.26V16.3a.3.3,0,0,1,.46-.26L47.8,24.28A.31.31,0,0,1,47.8,24.8Z"
            />
        </svg>
    );
}
