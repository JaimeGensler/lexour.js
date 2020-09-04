import pageList from '../../pageList';
import LandingNavItem from './LandingNavItem';

const pageLinks = pageList.map(page => (
    <LandingNavItem {...page} key={page.title} />
));

export default function LandingNav() {
    return (
        <nav>
            <ol>{pageLinks}</ol>
        </nav>
    );
}
