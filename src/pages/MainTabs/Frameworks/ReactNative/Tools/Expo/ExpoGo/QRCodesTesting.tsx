import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const QRCodesTesting = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/ExpoGo/QRCodesTesting';

  return (
    <>
      <PageLayout>        <PageTitle title="QR Codes/Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QRCodesTesting;
