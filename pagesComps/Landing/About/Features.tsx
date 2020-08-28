import { ExternalLink as Link } from '../../util/Link';

export default function Features() {
    return (
        <div>
            <p>
                lexour includes a number of features out of the box, including:
            </p>
            <ul className="list-disc pl-8">
                <li>
                    <strong>
                        Accessible, mobile friendly cross-browser support.
                    </strong>
                </li>
                <li>
                    <strong>Built-in type support!</strong> Lexour is built
                    entirely in TypeScript, but you can stick with plain ol' JSX
                    if you prefer.
                </li>
                <li>
                    <strong>Annotations!</strong> Likely the most useful and
                    powerful part of lexour, annotations provide added
                    functionality that would otherwise be impossible.
                </li>
                <li>
                    <strong>Custom theme support!</strong> Don't like the
                    built-in themes? Make your own and pass it to the `theme`
                    prop to see it in action.
                </li>
                <li>
                    <strong>Toy language support!</strong> If you build a lexer
                    with Moo, you can pass it directly to the `lang` prop and
                    see it in action straight away - no extra setup or config
                    necessary.
                </li>
                <li>
                    <strong>Only one dependency</strong> (
                    <Link
                        href="https://www.github.com/no-context/moo"
                        title="View Moo on Github"
                    >
                        Moo
                    </Link>
                    ). Even better, Moo itself is tiny (4KB minified + gzipped)
                    and currently has zero dependencies.
                </li>
            </ul>
        </div>
    );
}
