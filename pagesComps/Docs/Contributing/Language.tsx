import Section from '../../utils/Section';
import { ExLink, InLink } from '../../utils/Link';

export default function Language() {
    return (
        <Section title="Contributing a language to lexour" id="contributing">
            <p>
                If you've built a tokenizer for a language not already included
                in lexour, you're welcome to submit a pull request! At present,
                for a language-support request to be approved, it must:
            </p>
            <ul className="list-disc pl-12">
                <li>
                    Follow the{' '}
                    <ExLink href="">
                        general contribution guidelines [fix me]
                    </ExLink>{' '}
                    (and, by extension, the{' '}
                    <ExLink href="">Code of Conduct [fix me]</ExLink>).
                </li>
                <li>
                    Be written using{' '}
                    <ExLink
                        href="https://github.com/no-context/moo"
                        title="Moo.js on Github"
                    >
                        Moo.js
                    </ExLink>{' '}
                    to tokenize the input.{' '}
                    <em className="font-medium">
                        PRs that add new dependencies to tokenize code will be
                        rejected.
                    </em>
                </li>
                <li>
                    Be complete. You may make reasonable assumptions about how
                    this language is used - read the
                    <InLink href="/lexer-explanation">
                        lexer explanation
                    </InLink>{' '}
                    to get an idea of assumptions that are made for
                    JavaScript/TypeScript.
                </li>
                <li>Include support for lexour annotations.</li>
            </ul>
            At present, for a language-support request to be approved, it must:
            - Use Moo.js as a lexer - Include lexour.js annotation support -
            Generally work as expected - Be for a known, used (non-toy)
            language. - Follow the contribution guidelines
        </Section>
    );
}
