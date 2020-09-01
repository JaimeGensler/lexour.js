import Section from '../../utils/Section';
import Awaiting from './Awaiting';

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

export default function Comment() {
    return (
        <Section title="Comment Annotations" id="comment">
            <p>
                With annotations, you can include normal comments in your code
                block{' '}
                <span className="italic font-medium">
                    in addition to comments about the block itself
                </span>
                . For example, if you're writing a lesson on coding, you may
                have intentionally written a section wrong and/or messy:
            </p>
            <Awaiting />
            <p>
                Now if somebody else is looking at the lesson, they'll know why
                forEach was used instead of map!
            </p>
        </Section>
    );
}
