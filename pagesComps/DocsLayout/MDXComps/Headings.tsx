type Props = {
    children?: string;
};
export function H1({ children }: Props) {
    return <h1 className="font-bold text-4xl mb-1">{children}</h1>;
}

export function H2({ children }: Props) {
    if (!children) return <h2 />;
    const items = children.split(' ');
    const id = items.pop()?.replace(/\(|\)/g, '');

    return (
        <h2 id={id} className="font-semibold text-2xl mb-1">
            {items.join(' ')}
        </h2>
    );
}

export function HR({ children }: Props) {
    return <hr className="my-5 border-gray-400" />;
}
