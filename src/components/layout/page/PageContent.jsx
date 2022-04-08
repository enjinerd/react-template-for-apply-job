import Container from './Container';

const PageContent = ({ children }) => {
  return (
    <div className="flex flex-col px-4 pb-12">
      <Container>
        <div className="flex flex-col gap-3 px-3 py-4 space-y-2 lg:px-8">{children}</div>
      </Container>
    </div>
  );
};

export default PageContent;
