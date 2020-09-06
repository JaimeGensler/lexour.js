import pageList from '../../pageList';
import LandingNavItem from './LandingNavItem';

const pageLinks = pageList.map(page => (
    <LandingNavItem {...page} key={page.title} />
));

export default function LandingNav() {
    return (
        <nav>
            <ol className="divide-y-1 border-gray-800">{pageLinks}</ol>
        </nav>
    );
}
