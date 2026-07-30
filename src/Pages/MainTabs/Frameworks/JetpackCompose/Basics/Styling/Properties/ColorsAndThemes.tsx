import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ColorsAndThemes = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Styling/Properties/ColorsAndThemes';

  return (
    <>
      <PageLayout>        <PageTitle title="Colors & Themes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColorsAndThemes;
