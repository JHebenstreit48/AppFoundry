import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Basics = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Basics';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Styling Properties" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;