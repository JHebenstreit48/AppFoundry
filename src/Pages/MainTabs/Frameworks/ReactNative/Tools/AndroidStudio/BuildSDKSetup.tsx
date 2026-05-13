import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildSDKSetup = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/AndroidStudio/BuildSDKSetup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build/SDK Setup (RN)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildSDKSetup;
