import Landing from '../pagesComps/Landing';
import withPageTitle from '../pagesComps/util/withPageTitle';

function Home() {
    return <Landing />;
}

export default withPageTitle(Home, 'lexour');
