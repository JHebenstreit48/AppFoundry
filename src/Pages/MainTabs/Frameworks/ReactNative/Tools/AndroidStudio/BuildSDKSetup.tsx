import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildSDKSetup = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/AndroidStudio/BuildSDKSetup';

  return (
    <>
      <PageLayout>        <PageTitle title="Build/SDK Setup (RN)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildSDKSetup;
