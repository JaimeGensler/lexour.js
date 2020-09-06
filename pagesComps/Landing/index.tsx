import LandingGithub from './LandingGithub';
import Splash from './Splash';
import About from './About';
import GettingStarted from './GettingStarted';
import LandingNav from './LandingNav';

export default function Landing() {
    return (
        <>
            <div className="fixed top-0 right-0 md:mr-3 mt-2 md:mt-4">
                <LandingGithub />
            </div>
            <header>
                <Splash />
            </header>
            <main className="container mx-auto mb-4 md:my-12">
                <div className="px-4 md:flex md:items-center">
                    <div className="md:w-1/3">
                        <LandingNav />
                    </div>
                    <div className="flex-1 space-y-8 divide-y-2 mt-8 md:mt-0">
                        <About />
                    </div>
                </div>
                <div className="mt-8 md:mt-12 pt-2 px-4 border-t border-gray-600">
                    <GettingStarted />
                </div>
            </main>
        </>
    );
}
