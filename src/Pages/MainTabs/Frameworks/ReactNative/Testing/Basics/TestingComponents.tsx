import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestingComponents = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Testing/Basics/TestingComponents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Testing Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestingComponents;
