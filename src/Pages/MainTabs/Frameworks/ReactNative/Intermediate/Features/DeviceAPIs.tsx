import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import NotesRender from '@/Components/PageComponents/Notes/NotesRendering/NotesRender';

const RNDeviceAPIs = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Intermediate/Features/DeviceAPIs';

  return (
    <>
      <PageLayout>
        <Header
          text="Device APIs"
          size="md"
        />
        <NotesRender filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RNDeviceAPIs;
