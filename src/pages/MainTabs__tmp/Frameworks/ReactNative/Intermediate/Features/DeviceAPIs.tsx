import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DeviceAPIs = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Features/DeviceAPIs';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Device APIs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeviceAPIs;