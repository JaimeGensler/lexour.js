import { ExLink } from '../utils/Link';
import LexourText from './LexourText';

export default function About() {
    return (
        <section>
            <h2 className="font-bold text-4xl">About</h2>
            <p>
                <LexourText /> is a component for React that tokenizes and
                renders your code snippets. Provide a language and some code,
                and watch your input come to life with proper syntax
                highlighting. <LexourText /> provides an intuitive and highly
                customizable component: no config, no insane child prop - just
                simple, customizable syntax highlighting.
            </p>
            <div className="mt-4">
                <p>
                    <LexourText /> includes a number of features out of the box,
                    including:
                </p>
                <ul className="list-disc pl-8 space-y-1 mt-1">
                    <li>
                        <strong>
                            Accessible, mobile friendly cross-browser support.
                        </strong>
                    </li>
                    <li>
                        <strong>Built-in type support!</strong> Lexour is built
                        entirely in TypeScript, but you can stick with plain ol'
                        JSX if you prefer.
                    </li>
                    <li>
                        <strong>Annotations!</strong> Likely the most useful and
                        powerful part of lexour, annotations provide added
                        functionality that would otherwise be impossible.
                    </li>
                    <li>
                        <strong>Custom theme support!</strong> Don't like the
                        built-in themes? Make your own and pass it to the
                        `theme` prop to see it in action.
                    </li>
                    <li>
                        <strong>Toy language support!</strong> If you build a
                        lexer with Moo, you can pass it directly to the `lang`
                        prop and see it in action straight away - no extra setup
                        or config necessary.
                    </li>
                    <li>
                        <strong>Only one dependency</strong> (
                        <ExLink
                            href="https://github.com/no-context/moo"
                            title="View Moo on Github"
                        >
                            Moo
                        </ExLink>
                        ). Even better, Moo itself is tiny and currently has
                        zero dependencies.
                    </li>
                </ul>
            </div>
        </section>
    );
}
