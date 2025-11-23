import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ContextApi = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/ContextApi';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Context API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContextApi;