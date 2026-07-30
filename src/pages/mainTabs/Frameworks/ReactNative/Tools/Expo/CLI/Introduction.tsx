import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/CLI/Introduction';

return (
    <>
      <PageLayout>        <PageTitle title="Expo CLI - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;