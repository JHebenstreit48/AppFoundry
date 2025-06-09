import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const RNDeviceAPIs = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Intermediate/Features/DeviceAPIs';

  return (
    <>
      <PageLayout>
        <Header text="Device APIs" size="md" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RNDeviceAPIs;
