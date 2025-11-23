import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Basics = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Fundamentals/Basics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Styling Fundamentals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;