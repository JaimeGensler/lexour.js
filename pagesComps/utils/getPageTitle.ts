export default function getPageTitle(componentName: string) {
    return componentName.replace(/((?<!^)[A-Z][a-z]+)/g, ' $&');
}
