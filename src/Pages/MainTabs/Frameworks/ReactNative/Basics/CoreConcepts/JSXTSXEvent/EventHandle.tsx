import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';


const EventHandle = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/JSXTSXEvent/EventHandle';

  return (
    <>
      <PageLayout>        <PageTitle title="Event Handling in React Native" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default EventHandle;