import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Basics = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Components/Basics';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Components: Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;