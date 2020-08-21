import Splash from './Splash';
import Github from './Github';
import About from './About';

export default function Landing() {
    return (
        <>
            <Github />
            <main>
                <Splash />
                <div className="container mx-auto my-12">
                    <About />
                </div>
            </main>
        </>
    );
}
