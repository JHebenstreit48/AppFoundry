import Header from "@/Components/Shared/Header";
import NotesRender from "@/Components/PageComponents/Notes/NotesRender";

const RNDeviceAPIs = () => {
  const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Intermediate/Features/DeviceAPIs";

  return (
    <>
      <Header text="Device APIs" size="md" />
      <NotesRender filePath={markdownFilePath} />
    </>
  );
};

export default RNDeviceAPIs;
