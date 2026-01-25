import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BasicsResources = () => {
  const markdownFilePath = 'Resources/Frameworks/ReactNative/Basics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Resources" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicsResources;