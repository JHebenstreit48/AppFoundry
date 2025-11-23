import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BordersAndShadows = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/BordersAndShadows';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Borders & Shadows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BordersAndShadows;