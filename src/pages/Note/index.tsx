import React, {createRef, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TextInput, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Storage, {INote} from '../../storage/noteStorage';

import {
  Container,
  Scroller,
  HeaderOptions,
  HeaderButton,
  HeaderTitle,
  NoteTitle,
  NoteDescription,
} from './styles';

const Note = () => {
  const route = useRoute();
  const params = route.params as INote;
  const navigation = useNavigation();

  const inputTitle = createRef<TextInput>();
  const inputDescription = createRef<TextInput>();

  const [idNote, setIdNote] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [headerTextTitle, setHeaderTextTitle] = useState('Nova Nota');

  const [disabledDeleteButton, setDisabledDeleteButton] = useState(false);
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(false);

  const handleDeleteAndGoBack = async () => {
    if (idNote !== '') {
      setDisabledDeleteButton(true);
      const statusDelete = await Storage.deleteNote(idNote);
      if (statusDelete === 'success') {
        navigation.reset({
          index: 1,
          routes: [{name: 'ListNotes'}],
        });
      } else {
        ToastAndroid.showWithGravity(
          'Erro ao Deletar a nota! Contate o @Azanniel',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    } else {
      navigation.goBack();
    }
  };

  const handleSubmitNote = async () => {
    setDisabledSubmitButton(true);

    if (description.trim()) {
      let statusSave = null;

      if (idNote !== '') {
        statusSave = await Storage.editNote({
          id: idNote,
          title: title.trim(),
          description,
        });
      } else {
        statusSave = await Storage.saveNote({
          title: title.trim(),
          description,
        });
      }

      if (statusSave === 'success') {
        setDisabledSubmitButton(false);
        navigation.reset({
          index: 1,
          routes: [{name: 'ListNotes'}],
        });
      } else {
        ToastAndroid.showWithGravity(
          'Erro ao salvar a nota! Contate o @Azanniel',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    } else {
      ToastAndroid.showWithGravity(
        'Adicione alguma coisa a sua nota para salvá-la',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      setDisabledSubmitButton(false);
    }
  };

  useEffect(() => {
    if (params) {
      setHeaderTextTitle('Editando');
      setIdNote(params.id || '');
      setTitle(params.title || '');
      setDescription(params.description);
    }
  }, [params]);

  return (
    <Container>
      <Scroller showsVerticalScrollIndicator={false}>
        <HeaderOptions>
          <HeaderButton
            onPress={handleDeleteAndGoBack}
            disabled={disabledDeleteButton}>
            <Icon name="trash-2" size={32} color="#D45E5E" />
          </HeaderButton>

          <HeaderTitle>{headerTextTitle}</HeaderTitle>

          <HeaderButton
            onPress={handleSubmitNote}
            disabled={disabledSubmitButton}>
            <Icon name="check" size={32} color="#67AF5B" />
          </HeaderButton>
        </HeaderOptions>

        <NoteTitle
          ref={inputTitle}
          returnKeyType="next"
          placeholder="Título"
          placeholderTextColor="#ccc"
          maxLength={24}
          autoCapitalize="sentences"
          value={title}
          onChangeText={(text) => setTitle(text)}
          onSubmitEditing={() => inputDescription.current?.focus()}
        />

        <NoteDescription
          ref={inputDescription}
          placeholder="Escreva aqui a sua nota"
          placeholderTextColor="#ccc"
          multiline={true}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </Scroller>
    </Container>
  );
};

export default Note;
