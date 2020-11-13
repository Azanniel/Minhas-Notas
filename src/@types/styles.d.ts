import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      text: string;
      floatButton: string;
      noteBackground: string;
      noteInputText: string;
    };
  }
}
