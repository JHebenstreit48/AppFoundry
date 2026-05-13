import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildVariantsAndFlavors = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/BuildAndConfig/BuildVariantsAndFlavors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build Variants & Flavors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildVariantsAndFlavors;
