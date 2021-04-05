/* Redux-------------------------------------------------------------------------- */
import { useDispatch } from "react-redux";
import { contentAction } from "../../redux/reducers/newPost";

/* Draft.js-------------------------------------------------------------------------- */
// 에디터의 현재 콘텐츠 정보를 추출하는 함수 import
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// draftjs 콘텐츠를 html로 변환하는 함수 import
import draftToHtml from "draftjs-to-html";

function TextEditor () {
  // Redux dispatch
  const dispatch = useDispatch();

  /* Draft.js-------------------------------------------------------------------------- */
  const editorToHtml = (editorState: any) => draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const onEditorStateChange = (editorState: any) => {
    dispatch(contentAction(editorToHtml(editorState)));
  };

  return (
    <>
      <Editor
      localization={{
        locale: 'ko',
      }}
      placeholder=' 내용을 입력하세요.'
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: false },
      }}
      />
    </>
  )
}

export default TextEditor
