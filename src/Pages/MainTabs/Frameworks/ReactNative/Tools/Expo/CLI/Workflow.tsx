import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Workflow = () => {
const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/CLI/Workflow';

return (
    <>
      <PageLayout>        <PageTitle title="Expo CLI - Workflow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Workflow;