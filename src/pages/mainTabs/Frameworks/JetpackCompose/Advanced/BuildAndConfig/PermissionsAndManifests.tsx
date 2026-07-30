import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PermissionsAndManifests = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/BuildAndConfig/PermissionsAndManifests';

  return (
    <>
      <PageLayout>        <PageTitle title="Permissions & Manifests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PermissionsAndManifests;
