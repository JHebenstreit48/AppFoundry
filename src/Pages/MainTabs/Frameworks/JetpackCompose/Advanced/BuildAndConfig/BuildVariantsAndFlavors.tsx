import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildVariantsAndFlavors = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/BuildAndConfig/BuildVariantsAndFlavors';

  return (
    <>
      <PageLayout>        <PageTitle title="Build Variants & Flavors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildVariantsAndFlavors;
