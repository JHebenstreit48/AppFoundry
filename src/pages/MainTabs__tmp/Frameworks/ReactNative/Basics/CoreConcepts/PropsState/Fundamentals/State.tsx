import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const State = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Fundamentals/State';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - State" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default State;