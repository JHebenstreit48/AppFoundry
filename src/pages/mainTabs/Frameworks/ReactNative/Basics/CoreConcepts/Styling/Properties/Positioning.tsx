import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Positioning = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Positioning';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Positioning & Alignment" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Positioning;