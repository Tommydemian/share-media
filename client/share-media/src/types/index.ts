export interface InitialState {
    mode: string,
    user: {
        firstname: string | null,
        lastname: string | null,
        friends: string[] | null
    }
    token: string,
    posts: any[] | null
}

export interface ThemeSettings {
    palette: {
      mode: "light" | "dark" | undefined;
      primary: {
        dark: string;
        main: string;
        light: string;
      };
      neutral: {
        dark: string;
        main: string;
        mediumMain: string;
        medium: string;
        light: string;
      };
      background: {
        default: string;
        alt: string;
      };
    };
    typography: {
      fontFamily: string;
      fontSize: number;
      h1: {
        fontFamily: string;
        fontSize: number;
      };
      h2: {
        fontFamily: string;
        fontSize: number;
      };
      h3: {
        fontFamily: string;
        fontSize: number;
      };
      h4: {
        fontFamily: string;
        fontSize: number;
      };
      h5: {
        fontFamily: string;
        fontSize: number;
      };
      h6: {
        fontFamily: string;
        fontSize: number;
      };
    };
  }