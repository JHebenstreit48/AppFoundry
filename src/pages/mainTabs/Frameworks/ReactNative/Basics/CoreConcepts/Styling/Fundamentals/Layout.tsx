import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Layout = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Fundamentals/Layout';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Layout" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Layout;