import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TestingComponents = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Testing/Basics/TestingComponents';

  return (
    <>
      <PageLayout>        <PageTitle title="Testing Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestingComponents;
