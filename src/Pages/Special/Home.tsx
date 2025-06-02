import Header from "@/Components/Shared/Header";
import '@/SCSS/PageStyles/Home.scss';

const Home = () => {

    return (

        <>

            <Header text="AppFoundry" />

            <div className='siteInfo'>

                <p className='siteInfoContent'>
                    AppFoundry is a personal reference site for mobile app and game development. It serves as a collection of notes and resources that I have found useful in my journey as a developer. The site is designed to be a quick reference for myself and others who are interested in learning more about mobile app and game development.
                </p>

                <p className='siteInfoContent'>
                    The content is continuously updated as I explore new topics, tools, and techniques across frontend, backend, cloud services, and development workflows. It evolves alongside my skills as both a developer and a learner.
                </p>

                <p className='siteInfoContent'>
                    Use the navigation menu above to explore different categories. The site is organized for clarity, speed, and ongoing growth as I continue deepening my understanding of modern web development.
                </p>

            </div>

        </>
    );

};

export default Home;
