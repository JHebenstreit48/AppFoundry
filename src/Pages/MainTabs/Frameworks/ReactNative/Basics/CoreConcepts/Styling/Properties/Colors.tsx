import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Colors = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Colors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Colors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Colors;