import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Positioning = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Positioning';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Positioning & Alignment" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Positioning;