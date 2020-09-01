import Header from '../../utils/Header';

export default function AnnotationsContent() {
    return (
        <>
            <Header title="Annotations">
                <p>
                    Annotations are information for lexour that are included in
                    the code block itself. They are essentially meta-comments,
                    and will not be included in the final rendering.
                </p>
            </Header>
        </>
    );
}

const code1 = `
function doubleElementsInArray(initialArray) {
    /*@ The following code is intentionally not DRY! @*/
    /*@ The DRY code is shown in the future. @*/

    // This function takes an input array, and returns
    // a new array with all of the elements doubled!
    const newArray = [];
    initialArray.forEach(element => {
        newArray.push(element * 2);
    });
    return newArray;
}
`;

// ### KEEP Annotations

// If you want, you can keep annotations displayed in the code by starting them
// with KEEP: `@/* KEEP Your annotation here */@`. The annotation marker and all of
// the content _following KEEP_ will remain (`KEEP` itself will not - you can
// repeat it if you would like it to remain). Kept annotations are rendered as
// comments - that's all they are, after all!

// ### MARK AS Annotations

// We can resolve the problem mentioned at the end of the **Memories** section with
// **MARK AS** annotations. These annotations inform the parser exactly how to mark
// a selection, and are written as such:

// ```js
// function myFunc() {
//     return /*@ MARK myConst AS constant @*/;
// }
// ```

// The above example will render `myConst` with the `constant` syntax highlighting.
// Note that **MARK AS** annotations _do not_ pass the string you want marked back
// to the lexer, and are only ever treated as the token type that you specify. How
// that string would normally be tokenized is entirely ignored, so you can mark any
// string as any token type you like. All characters between `MARK` and `AS`
// (excluding the first and last spaces) are included in the final result. See the
// section on [theme](THIS_NEEDS_TO_JUMP_SOMEWHERE) for the list of possible
// highlights.

// ### DECLARE AS Annotations

// It would be annoying to have to mark `myConst` multiple times if it appeared
// more than once. For variable, constant, and class uses, you can use **DECLARE
// AS** annotations. These look identical to **MARK AS** annotations, but will
// remember your variables for the rest of the code block. And, if you prefer, you
// can simply put your declarations at the top of a code block.

// ```js
// //@ DECLARE myConst AS constant
// console.log(('My constant is': myConst));
// myConst;
// myConst;
// ```

// ### NEXT LINE Annotations

// If a code block shouldn't start at line 1 (and you can't specify in the props
// the correct line start), you can specify a **NEXT LINE** annotation. As would be
// expected, this annotation will inform the component what line numbers to start
// at.

// ```js
// /*@ NEXT LINE 82 @*/
// function someRandomCode() {
//     const number = 0;
//     const string = 'Check out the line numbers here! Woo 82!';
// }
// ```

// As you can see, the code starts at linesupport 82 and increments from there.
// Even more powerfully, **NEXT LINE** annotations support line jumps - consider
// the following example:

// ```js
// /*@ NEXT LINE 7 @*/
// class Dog extends Animal {
//     constructor(dogProps) {
//         this.name = dogProps.name;
//         this.breed = dogProps.breed;
//     }

//     ...

//     /*@ NEXT LINE 86 @*/
//     fetch(ball) {
//         return ball;
//     }
// }
// ```

// A "break" will be generated in the middle, and line numbers will start again
// at 86.

// **NEXT LINE** annotations will override the default component behavior - if your
// component's `firstLine` prop value is `0` but includes a **NEXT LINE**
// annotation line numbers will be calculated for _all lines_ in the code block.

// **Please take note of this: Next LINE annotations force line number calcualtions
// for all lines of the code block, not just the lines following the annotation.**

// //////#### SOME CODE

// ### READ AS Annotations

// /// **READ AS** annotations, for gql and similar? ///

// ### Sequential Annotations

// While you can technically only use one type of annotation per comment block, you
// can put multiple annotations together for different effects. Consider the
// following:

// ```js
// function someFunc() {
//     /*@ MARK /*@ AS comment @*//*@ MARK /*@ AS
// }
// ```

// ### Additional Notes

// Annotations cannot serve more than one purpose (comment, MARK AS, etc.). If no
// keyword is provided _at the beginning of the annotation_, they will behave as
// comment annotations. Mistyped annotations (e.g.
// `/*@ MURK something AS keyword @*/`) will behave as comment annotations.
// Otherwise, annotations will execute as whatever keyword is provided first.
