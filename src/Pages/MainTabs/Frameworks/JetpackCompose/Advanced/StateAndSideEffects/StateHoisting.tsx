import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StateHoisting = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/StateAndSideEffects/StateHoisting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="State Hoisting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StateHoisting;
