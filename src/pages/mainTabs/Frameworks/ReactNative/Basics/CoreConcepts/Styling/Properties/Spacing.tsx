import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Spacing = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Spacing';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Spacing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Spacing;