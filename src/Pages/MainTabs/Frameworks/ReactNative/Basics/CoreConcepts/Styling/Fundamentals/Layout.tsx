import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Layout = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Fundamentals/Layout';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Layout" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Layout;