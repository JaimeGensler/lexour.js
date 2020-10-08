import pageList from '../../pageList';
import LandingNavItem from './LandingNavItem';

const getStarted = {
    title: 'Getting Started',
    pageURL: '#getting-started',
};

const pageLinks = [getStarted, ...pageList].map(({ title, pageURL }) => (
    <LandingNavItem title={title} pageURL={pageURL} key={title} />
));

export default function LandingNav() {
    return (
        <nav>
            <ol className="divide-y-1 border-gray-800">{pageLinks}</ol>
        </nav>
    );
}
