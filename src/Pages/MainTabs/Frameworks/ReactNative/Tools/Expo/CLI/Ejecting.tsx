import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Ejecting = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/CLI/Ejecting';

  return (
    <>
      <PageLayout>        <PageTitle title="Ejecting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Ejecting;
