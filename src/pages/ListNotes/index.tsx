import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from '../../contexts/ThemeContext';
import {INote} from '../../storage/noteStorage';
import CardNote from '../../components/CardNote';

import Storage from '../../storage/noteStorage';

import {
  Container,
  Scroller,
  Header,
  HeaderTitle,
  ToogleThemeButton,
  Description,
  CardArea,
  LoadingCards,
  Instructions,
  FloatButton,
  ElevationFloatButton,
} from './styles';

const ListNotes = () => {
  const navigation = useNavigation();
  const {theme, toogleTheme} = useTheme();
  const [loading, setLoading] = useState(false);
  const [arrayNotes, setArrayNotes] = useState<INote[]>([]);

  const fetchNotesInStorage = async () => {
    const notes = await Storage.listNotes();
    if (notes) {
      setArrayNotes(notes);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchNotesInStorage();
    setLoading(false);
  }, []);

  return (
    <Container>
      <Scroller showsVerticalScrollIndicator={false}>
        <Header>
          <HeaderTitle>Minhas Notas</HeaderTitle>
          <ToogleThemeButton onPress={toogleTheme}>
            {theme.title === 'light' ? (
              <Icon name="brightness-2" size={28} color="#272935" />
            ) : (
              <Icon name="brightness-7" size={28} color="#CC904A" />
            )}
          </ToogleThemeButton>
        </Header>

        <Description>
          Fique a vontade para adicionar notas sobre o que quiser
        </Description>

        <CardArea>
          {arrayNotes.length !== 0 ? (
            arrayNotes.map((note) => {
              return (
                <CardNote
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  description={note.description}
                />
              );
            })
          ) : (
            <Instructions>
              {loading ? (
                <LoadingCards size="large" color={theme.colors.text} />
              ) : (
                'Adicione notas clicando no botão flutuante'
              )}
            </Instructions>
          )}
        </CardArea>
      </Scroller>

      <ElevationFloatButton>
        <FloatButton
          onPress={() => {
            navigation.navigate('Note');
          }}>
          <Icon name="plus" size={28} color="#fff" />
        </FloatButton>
      </ElevationFloatButton>
    </Container>
  );
};

export default ListNotes;
