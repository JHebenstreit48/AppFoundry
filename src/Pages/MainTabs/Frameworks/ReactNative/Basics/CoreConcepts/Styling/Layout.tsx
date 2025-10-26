import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StylingLayout = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Layout';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native - Styling Layout" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default StylingLayout;