/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StyledButton from '../../../components/Button/StyledButton';
import StyledContentInput from '../../../components/ContentInput/StyledContentInput';
import { StyledModal } from '../../../components/Modal/StyledModal';
import StyledSelect from '../../../components/Select/StyledSelect';
import StyledTitleInput from '../../../components/TitleInput/StyledTitleInput';
import { idAction } from '../../../redux/reducers/newPost';
import { useState } from 'react';

type writeProps = {
  className: string;
};

const Write = ({ className }: writeProps) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    dispatch(idAction());
  }, []);

  const uploadPost = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={className} onSubmit={uploadPost}>
      <StyledSelect />
      <StyledTitleInput className='title-input' />
      <StyledContentInput className='content-input' height='400' />
      <StyledButton
        onOpen={onOpen}
        width='960'
        className='write-submit'
        children='UPLOAD'
        type='submit'
      />
      {visible && <StyledModal onClose={onClose} className='' />}
    </form>
  );
};

export default Write;
