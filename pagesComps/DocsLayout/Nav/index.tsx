import pageList from '../pageList';
import NavItem from './NavItem';

const linkList = pageList.map(page => <NavItem {...page} key={page.title} />);

export default function Nav() {
    return (
        <nav className="h-full bg-white flex-0 flex flex-col">
            <ol className="flex-0">{linkList}</ol>
            <div className="flex-1 border-gray-300 border-r" />
        </nav>
    );
}
