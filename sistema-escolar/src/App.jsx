import Principal from "./features/Principal"
import { BrowserRouter } from "react-router";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ptBR } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/pt-br';

export default function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider
        localeText=
          {ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
        dateAdapter={AdapterDayjs}
        adapterLocale="pt-BR"
        >
        <Principal />
      </LocalizationProvider>
  </BrowserRouter>)
}