import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnitTestingWithJest = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Testing/Basics/UnitTestingWithJest';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Unit Testing with Jest" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnitTestingWithJest;
