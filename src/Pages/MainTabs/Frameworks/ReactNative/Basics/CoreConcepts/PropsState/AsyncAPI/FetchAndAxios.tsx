import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FetchAndAxios = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/PropsState/AsyncApi/FetchAndAxios';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Fetch & Axios" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FetchAndAxios;