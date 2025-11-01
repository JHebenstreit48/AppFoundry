import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Workflow = () => {
const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/CLI/Workflow';

return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Expo CLI - Workflow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Workflow;