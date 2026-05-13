import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QRCodesTesting = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/ExpoGo/QRCodesTesting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="QR Codes/Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QRCodesTesting;
