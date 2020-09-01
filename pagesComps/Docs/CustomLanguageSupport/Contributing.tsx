import Section from '../../utils/Section';
import { ExLink } from '../../utils/Link';

export default function Contributing() {
    return (
        <Section title="Contributing a language to lexour" id="contributing">
            <p>
                If you've built a lexer for a language not already included in
                lexour, you're welcome to submit a pull request! At present, for
                a language-support request to be approved, it must:
            </p>
            <ul className="list-disc">
                <li>
                    Follow the{' '}
                    <ExLink href="">contribution guidelines [fix me]</ExLink>{' '}
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
                    to tokenize the input.
                </li>
            </ul>
            At present, for a language-support request to be approved, it must:
            - Use Moo.js as a lexer - Include lexour.js annotation support -
            Generally work as expected - Be for a known, used (non-toy)
            language. - Follow the contribution guidelines
        </Section>
    );
}
