import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuiltIn = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Components/BuiltIn';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Built-in Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuiltIn;