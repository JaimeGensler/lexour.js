import Landing from '../comps/Landing';
import withTitle from '../comps/withTitle';

function Home() {
    return <Landing />;
}

export default withTitle(
    Home,
    'lexour - a React component for your code snippets',
);
