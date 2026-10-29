import '@fontsource/nunito'
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
