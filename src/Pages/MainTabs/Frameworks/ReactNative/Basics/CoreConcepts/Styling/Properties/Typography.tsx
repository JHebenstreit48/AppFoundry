import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Typography = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Typography';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Typography" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Typography;