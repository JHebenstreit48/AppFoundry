import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Basics = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Components/Basics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Components: Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;