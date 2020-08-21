# THIS README IS A WORK IN PROGRESS - MANY LINKS DON'T WORK AND THE PACKAGE IS NOT YET ON NPM

# lexour.js

A React component to display your code snippets! Coming soon to a package
manager near you.

### Features

The goal of lexour is to provide a simple, intuitive, and highly customizable
code highlighting component - no config, no insane child map to pass, just
simple (and powerful) syntax highlighting. lexour includes a number of features,
including:

-   **Accessible, mobile friendly, and cross-browser support.**
-   **Built-in type support!** Lexour is built entirely in TypeScript, but you
    can stick with plain ol' JSX if you prefer.
-   **Annotations!** Likely the most useful and powerful part of lexour,
    annotations provide added functionality that would otherwise be impossible.
-   **Custom theme support!** Don't like the built-in themes? Make your own and
    pass it to the `theme` prop to see it in action.
-   **Toy language support!** If you build a lexer with **Moo**, you can pass it
    directly to the `lang` prop and see it in action straight away - no extra
    setup or config necessary.
-   **Only one dependency** ([Moo](moo)). Even better, Moo itself is tiny (4KB
    minified + gzipped) and currently has **zero dependencies**.

## Installation

To get started with lexour using npm:

```
npm install lexour
```

Or, if you prefer yarn:

```
yarn add lexour
```

**lexour has a peer dependency requirement of `react>=16.8`** (the introduction
of hooks), so you'll want to double check that as well.

## Quick Start

To use lexour, you'll need to import the component:

```jsx
import CodeBlock from 'lexour';
```

The `CodeBlock` component only requires two props be passed - a language (to use
the correct lexer), and the code to be tokenized.

```jsx
const myCode = `
const myMessage = "Hello, world!";
console.log(myMessage);
`;

function myComponent() {
    return <CodeBlock lang="javascript" code={code} />;
}
```

If you'd like it to render line numbers:

```jsx
return <CodeBlock lang="js" code={code} showLineNumbers />;
```

Or maybe you need it to start at line 43?

```jsx
return <CodeBlock lang="ts" code={code} showLineNumbers firstLine={43} />;
```

And those are just the very basics. For full documentation, please check out
[the docs site](https://JaimeGensler.github.io/lexour). It includes all the
information you'll need, including info about annotations (_ooo_), themes
(_aaah_), toy languages (_whaaat_), and more (_wowee_)! It also
[provides some information](lexer_explanation) about how lexour works under the
hood, **which is probably where you want to look if it seems like a token is of
the wrong type**.

It should be noted here that **lexour is only a lexer**. It does not parse the
input code or generate an AST, and it _certainly_ does not run it. As such,
lexour has no way of knowing if your input represents a valid chunk of code (and
you probably don't want it to, either). Valid code will always be more-or-less
displayed as expected ([read why it's more-or-less](lexer_explanation)), but
invalid code will either appear as valid or be marked as invalid, depending on
the language and the input code.

## Contributing

If you'd like to contribute, thanks! First read the [code of conduct](conduct)
in its entirety to understand what sort of actions are and are not acceptable.
Once you've done that, read the [guide on contributing](contributing). And
again - thank you!

[moo]: (https://github.com/no-context/moo)
[conduct]: (./CODE_OF_CONDUCT.md)
[contributing]: (./README.md)
[lexer_explanation]: (./README.md)
