import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ContextApi = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/ContextApi';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Context API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContextApi;