import Header from "@/Components/Shared/Header/Header";
import NotesHome from "@/Components/PageComponents/Notes/NotesHome";
import PageLayout from "@/Components/NavigationUI/PageLayout";
import { SITE_NAME } from "@/Components/Shared/dynamicSiteName";
import "@/SCSS/PageStyles/Home.scss";

const Home = () => {
  return (
    <PageLayout shortTitle={`${SITE_NAME} | Home`}>
      <Header />
      <div className="siteInfo">
        <NotesHome />
      </div>
    </PageLayout>
  );
};

export default Home;