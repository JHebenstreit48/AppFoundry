import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ColorsAndThemes = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Styling/Properties/ColorsAndThemes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Colors & Themes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColorsAndThemes;
