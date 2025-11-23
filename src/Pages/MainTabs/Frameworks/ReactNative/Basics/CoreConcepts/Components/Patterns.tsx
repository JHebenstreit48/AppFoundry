import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Patterns = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/Components/Patterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Component Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Patterns;