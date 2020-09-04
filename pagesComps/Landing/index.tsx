import Github from './Github';
import Splash from './Splash';
import About from './About';
import GettingStarted from './GettingStarted';
import LandingNav from './LandingNav';

export default function Landing() {
    return (
        <>
            <Github />
            <header>
                <Splash />
            </header>
            <main className="container mx-auto my-12">
                <div className="flex items-center px-4">
                    <div className="w-1/3">
                        <LandingNav />
                    </div>
                    <div className="flex-1 space-y-8 divide-y-2">
                        <About />
                    </div>
                </div>
                <GettingStarted />
            </main>
        </>
    );
}
