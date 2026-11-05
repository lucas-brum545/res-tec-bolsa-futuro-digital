import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/400.css"; // Specify weight
import "@fontsource/nunito/400-italic.css"; // Specify weight and style
import { BrowserRouter } from 'react-router'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ptBR } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/pt-br';
import Principal from '../pages/Principal/Principal';

function App() {
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
      </BrowserRouter>
  )
}

export default App
