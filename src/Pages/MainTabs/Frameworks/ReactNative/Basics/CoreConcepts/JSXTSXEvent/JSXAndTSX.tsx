import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSXTSX = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/JSXTSXEvent/JSXAndTSX';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title=" React Native Core Concepts - JSX & TSX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSXTSX;