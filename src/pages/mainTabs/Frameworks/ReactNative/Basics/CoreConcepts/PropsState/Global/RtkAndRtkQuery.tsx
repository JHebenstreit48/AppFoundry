import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RtkAndRtkQuery = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/RtkAndRtkQuery';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - RTK & RTK Query (RN)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RtkAndRtkQuery;