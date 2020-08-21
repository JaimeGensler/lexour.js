export default function About() {
    return (
        <section className="w-100">
            <h2 className="font-bold text-4xl">
                About <span className="text-">lexour</span>
            </h2>
            <div className="text-lg space-y-4">
                <p>
                    lexour is a component for React <code>(&gt;=16.8.0)</code>{' '}
                    to display your code snippets. Given a language and some
                    code, lexour will tokenize your code and render it with
                    proper syntax highlighting. lexour provides a simple,
                    intuitive, and highly customizable syntax highlighting
                    component: no config, no insane child map to pass - just
                    simple, easily customizable syntax highlighting.
                </p>
            </div>
        </section>
    );
}
