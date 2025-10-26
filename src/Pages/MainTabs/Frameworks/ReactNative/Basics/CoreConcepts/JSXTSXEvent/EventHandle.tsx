import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';


const EventHandle = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/PropsStateEvent/EventHandle';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Event Handling in React Native" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default EventHandle;
