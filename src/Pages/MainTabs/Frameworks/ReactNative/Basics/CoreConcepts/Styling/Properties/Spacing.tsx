import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Spacing = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Spacing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Spacing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Spacing;