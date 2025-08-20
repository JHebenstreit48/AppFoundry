import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import NotesHome from '@/Components/PageComponents/Notes/NotesHome';
import '@/SCSS/PageStyles/Home.scss';

const Home = () => {
  return (
    <>
      <PageLayout shortTitle="AppFoundry | Home">
        <Header />
        <div className="siteInfo">
          <NotesHome />
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
