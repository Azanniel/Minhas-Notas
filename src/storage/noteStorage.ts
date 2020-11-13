import AsyncStorage from '@react-native-async-storage/async-storage';

export interface INote {
  id?: string;
  title?: string;
  description: string;
}

export default {
  async saveNote(note: INote): Promise<string> {
    try {
      const existsArrayNotes = await this.listNotes();

      const newArrayNotes = existsArrayNotes !== null ? existsArrayNotes : [];

      note.id = String(Date.now());
      newArrayNotes.unshift(note);
      const jsonValue = JSON.stringify(newArrayNotes);

      await AsyncStorage.setItem('@mynotesNotes', jsonValue);

      return 'success';
    } catch (error) {
      console.error(error);
      return 'error';
    }
  },

  async deleteNote(id: string) {
    const existsArrayNotes = await this.listNotes();

    if (existsArrayNotes) {
      const indexNote = existsArrayNotes.findIndex((note) => note.id === id);

      existsArrayNotes.splice(indexNote, 1);

      try {
        const jsonValue = JSON.stringify(existsArrayNotes);

        await AsyncStorage.setItem('@mynotesNotes', jsonValue);

        return 'success';
      } catch (error) {
        console.error(error);
        return 'error';
      }
    }
  },

  async editNote(note: INote): Promise<string> {
    const existsArrayNotes = await this.listNotes();

    existsArrayNotes?.map((existNote) => {
      if (existNote.id === note.id) {
        existNote.title = note.title;
        existNote.description = note.description;
      }
    });

    try {
      const jsonValue = JSON.stringify(existsArrayNotes);

      await AsyncStorage.setItem('@mynotesNotes', jsonValue);

      return 'success';
    } catch (error) {
      console.error(error);
      return 'error';
    }
  },

  async listNotes(): Promise<INote[] | null> {
    try {
      const jsonValue = await AsyncStorage.getItem('@mynotesNotes');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
