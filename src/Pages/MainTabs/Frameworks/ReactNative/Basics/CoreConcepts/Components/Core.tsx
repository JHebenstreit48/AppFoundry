import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Core = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Components/Core';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Core Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Core;