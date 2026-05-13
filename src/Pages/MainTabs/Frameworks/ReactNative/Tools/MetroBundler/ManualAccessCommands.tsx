import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ManualAccessCommands = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/MetroBundler/ManualAccessCommands';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Manual Access/Commands" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ManualAccessCommands;
