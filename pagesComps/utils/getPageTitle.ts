const groups = /[a-z]+|\-/g;
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const formatter = (match: string) => (match === '-' ? ' ' : capitalize(match));

export default function getPageTitle(path: string) {
    if (path === '/') {
        return 'lexour';
    }
    const pageName = path.replace('/docs/', '').replace(groups, formatter);
    return `lexour - ${pageName}`;
}
