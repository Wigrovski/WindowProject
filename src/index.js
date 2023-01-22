import { modal } from './modules/modal'
import { clientsSlider } from './modules/slider'
import { serviceSlider } from './modules/slider'
import { timer } from './modules/timer'
import { scroll } from './modules/scroll'
import { sendForm } from './modules/sendform'
import { validate } from './modules/validate'
import { calc } from './modules/calc'
import { zoom } from './modules/zoom'


scroll()
clientsSlider()
serviceSlider()
modal()
timer('23 january 2023')
sendForm({formId: 'form1',})
sendForm({formId: 'form2',})
validate()
calc()
zoom()