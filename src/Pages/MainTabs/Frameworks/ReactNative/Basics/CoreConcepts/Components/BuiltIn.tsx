import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuiltIn = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Components/BuiltIn';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Built-in Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuiltIn;