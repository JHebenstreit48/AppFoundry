import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Layout = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Styling/Layout';

  return (
    <>
      <PageLayout>        <PageTitle title="Layout" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Layout;
