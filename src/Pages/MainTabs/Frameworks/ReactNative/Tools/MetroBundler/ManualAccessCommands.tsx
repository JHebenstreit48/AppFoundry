import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ManualAccessCommands = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/MetroBundler/ManualAccessCommands';

  return (
    <>
      <PageLayout>        <PageTitle title="Manual Access/Commands" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ManualAccessCommands;
