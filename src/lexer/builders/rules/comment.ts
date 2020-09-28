import getRegExpString from '../../utils/getRegExpString';
import { RuleType, TokenResolver } from '../../../types';
import type { Matcher, Rule } from '../../../types';

import {
    getAnnotationType,
    AnnotationType,
    getKeepToken,
    getMarkAsToken,
    getNextLineToken,
    getCommentToken,
} from '../../utils/annotations';

export default function comment(
    rawStart: Matcher,
    rawEnd?: Matcher,
    permitMultiLine = false,
): Rule {
    const start = getRegExpString(rawStart);
    const middle = permitMultiLine ? '[\\s\\S]*?' : '.*?';
    const end = rawEnd !== undefined ? getRegExpString(rawEnd) : '$';
    const search = start + middle + end;

    const tokenResolver = getCommentResolver(start, end);
    return { ruleType: RuleType.COMMON, tokenResolver, search };
}

const getCommentResolver = (start: string, end: string): TokenResolver => {
    const annotationSearch = new RegExp(
        `${start}@\\s*(.*?)\\s*${end === '$' ? '$' : `@${end}`}`,
    );
    const isAnnotation = (match: string) =>
        !/\r\n|\r|\n/.test(match) && annotationSearch.test(match);
    return match => {
        if (!isAnnotation(match)) {
            return 'comment';
        }
        const content = annotationSearch.exec(match)![1];
        switch (getAnnotationType(content)) {
            case AnnotationType.COMMENT:
                return getCommentToken();
            case AnnotationType.KEEP:
                return getKeepToken(match);
            case AnnotationType.MARK_AS:
                return getMarkAsToken(content);
            case AnnotationType.NEXT_LINE:
                return getNextLineToken(content);
            default:
                throw new Error(`Failed to parse "${match}" as annotation.`);
        }
    };
};
