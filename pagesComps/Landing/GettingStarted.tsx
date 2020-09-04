import CodeBlock from '../utils/CodeBlock';

const packageInstall = `
// For NPM users:
//@ MARK npm install lexour AS unknown

// For Yarn users
//@ MARK yarn add lexour AS unknown
`;
export default function GettingStarted() {
    return (
        <section className="border-t border-gray-600 mt-12 pt-2 px-4">
            <h2 className="font-bold text-4xl">Getting Started</h2>
            <p>
                To get started with lexour, you'll need to install the package:
            </p>
            <CodeBlock lang="js" code={packageInstall} />
            <p>
                <strong>
                    Again, lexour has a peer dependency requirement of{' '}
                    <code>react&gt;=16.8</code>
                </strong>
                .
            </p>
            <p>
                To use lexour, you'll need to import the exposed component. The
                component only requires two props be passed - a language (lang),
                and the code to be tokenized.
            </p>
            <CodeBlock lang="js" code={'//this will require jsx'} />
            <p>If you'd like it to render line numbers:</p>
            <CodeBlock lang="js" code={'//another block'} showLineNumbers />
            <p>Or maybe you need it to start at line 43?</p>
            <CodeBlock
                lang="js"
                code={'//a third block'}
                showLineNumbers
                firstLine={43}
            />
            <p>
                And that should get you started. For full documentation, please
                check out [the docs site][docs]. It includes all the information
                you'll need, including info about annotations (_ooo_), themes
                (_aaah_), toy languages (_whaaat_), and more (_wowee_)! It also
                [provides some information][lexer_explanation] about how lexour
                works under the hood, **which is probably where you want to look
                if it seems like a token is of the wrong type**.
            </p>
            <p>
                It should be noted here that **lexour is only a lexer**. It does
                not parse the input code or generate an AST, and it _certainly_
                does not run it. As such, lexour has no way of knowing if your
                input represents a valid chunk of code (and you probably don't
                want it to, either). Valid code will always be more-or-less
                displayed as expected ([read why it's
                more-or-less][lexer_explanation]), but invalid code will either
                appear as valid or be marked as invalid, depending on the
                language and the input code.
            </p>
        </section>
    );
}
