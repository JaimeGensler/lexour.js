# THIS PACKAGE IS A WORK IN PROGRESS - NOT ALL LINKS ON THE README WORK AND THE PACKAGE IS NOT YET PROPERLY BUILT FOR NPM

<img src="images/lexour.svg" height="160px" align="left" />

# lexour

[![license: mit](https://img.shields.io/badge/license-MIT-blue)][license]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)][prettier]
[![pull requests: welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)][pull_requests]

[license]: ./LICENSE
[prettier]: https://github.com/prettier/prettier
[pull_requests]: https://github.com/JaimeGensler/lexour.js/pulls

A React component for your code snippets!

### Features

lexour is a component for React that tokenizes and renders your code snippets.
Provide a language and some code, and watch it come to life with proper syntax
highlighting. lexour provides an intuitive and highly customizable component: no
config, no insane child prop - just simple, customizable syntax highlighting.

It includes a number of features out of the box, including:

-   **Accessible, mobile-friendly, cross-browser support.**
-   **Built-in type support!** Lexour is built entirely in TypeScript, but you
    can stick with plain ol' JSX if you prefer.
-   **Annotations!** Likely the most useful and powerful part of lexour,
    annotations provide added functionality that would otherwise be impossible.
-   **Custom theme support!** Don't like the provided themes? Make your own and
    pass it to the `theme` prop to see your preferred highlighting scheme.
-   **Toy language support!** Build a tokenizer with Lexour's provided API, pass
    it directly to the `lang` prop, and see it in action right away - no extra
    setup or config necessary.
-   **Zero dependencies**.

## Installation

To get started with lexour using npm:

```
npm install lexour
```

Or, if you prefer yarn:

```
yarn add lexour
```

**lexour has a peer dependency requirement of `react>=16.8` and
`react-dom>=16.8`** (the introduction of hooks).

## Quick Start

To use lexour, you'll need to import the exposed component. The component only
requires two props be passed - a language (lang), and the code to be tokenized.

```jsx
import CodeBlock from 'lexour';

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
[the docs site][docs]. It includes all the information you'll need, including
info about annotations (_ooo_), themes (_aaah_), toy languages (_whaaat_), and
more (_wowee_)! It also [provides some information][lexer_explanation] about how
lexour works under the hood, **which is probably where you want to look if it
seems like a token is of the wrong type**.

**lexour is only a tokenizer**. It does not parse the input code or generate an
AST, and it certainly does not run it.

## Contributing

If you'd like to contribute, thanks! First read the [code of conduct][conduct]
in its entirety to understand what sort of actions are and are not acceptable.
Once you've done that, read the [guide on contributing][contributing]. And
again - thank you!

[docs]: ./README.md
[conduct]: ./CODE_OF_CONDUCT.md
[contributing]: ./README.md
[lexer_explanation]: ./README.md
