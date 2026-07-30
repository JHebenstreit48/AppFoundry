import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnitTestingWithJest = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Testing/Basics/UnitTestingWithJest';

  return (
    <>
      <PageLayout>        <PageTitle title="Unit Testing with Jest" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnitTestingWithJest;
