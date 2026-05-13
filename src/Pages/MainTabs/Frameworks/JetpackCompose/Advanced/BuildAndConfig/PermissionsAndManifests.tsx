import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PermissionsAndManifests = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/BuildAndConfig/PermissionsAndManifests';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Permissions & Manifests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PermissionsAndManifests;
