import TextEditor from "../Editor/TextEditor";

type contentInput = {
  className: string;
  width?: string;
  height?: string;
};

const ContentInput = ({ className }: contentInput) => {
  return (
    <div className={className}>
      <TextEditor
      />
    </div>
  );
};

ContentInput.defaultProps = {
  width: "100%",
};

export default ContentInput;
