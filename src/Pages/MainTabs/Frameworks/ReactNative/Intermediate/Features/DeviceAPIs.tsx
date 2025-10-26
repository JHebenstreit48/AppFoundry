import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents//PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RNDeviceAPIs = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Intermediate/Features/DeviceAPIs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Features - Device APIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RNDeviceAPIs;
