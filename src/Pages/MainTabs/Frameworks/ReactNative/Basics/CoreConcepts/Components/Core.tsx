import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Core = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Components/Core';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Core Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Core;