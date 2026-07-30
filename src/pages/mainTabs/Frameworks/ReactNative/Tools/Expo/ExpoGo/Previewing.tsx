import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Previewing = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/ExpoGo/Previewing';

  return (
    <>
      <PageLayout>        <PageTitle title="Previewing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Previewing;
