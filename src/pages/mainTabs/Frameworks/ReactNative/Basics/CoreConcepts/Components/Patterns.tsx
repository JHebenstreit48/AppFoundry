import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Patterns = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/Components/Patterns';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Component Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Patterns;