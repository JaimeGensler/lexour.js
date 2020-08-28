import Github from './Github';
import Splash from './Splash';
import About from './About';
import GettingStarted from './GettingStarted';

export default function Landing() {
    return (
        <>
            <Github />
            <main>
                <Splash />
                <div className="container mx-auto my-12 space-y-8 divide-y-2 text-lg">
                    <About />
                    <GettingStarted />
                </div>
            </main>
        </>
    );
}
