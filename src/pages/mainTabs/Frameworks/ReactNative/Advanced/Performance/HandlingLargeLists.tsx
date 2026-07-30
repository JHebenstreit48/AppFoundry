import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HandlingLargeLists = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/Performance/HandlingLargeLists';

  return (
    <>
      <PageLayout>        <PageTitle title="Handling Large Lists" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HandlingLargeLists;
