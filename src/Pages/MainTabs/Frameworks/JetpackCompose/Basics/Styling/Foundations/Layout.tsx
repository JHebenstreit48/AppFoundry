import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Layout = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Styling/Foundations/Layout';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Layout" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Layout;
