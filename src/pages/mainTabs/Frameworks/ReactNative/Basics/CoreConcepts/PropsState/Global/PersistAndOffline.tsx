import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PersistAndOffline = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/PersistAndOffline';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Persist & Offline (RN)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PersistAndOffline;