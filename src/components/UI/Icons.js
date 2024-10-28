import { MaterialIcons } from '@expo/vector-icons';

const icons = {};

const Add = () => <MaterialIcons name='add' size={16} />
const Close = () => <MaterialIcons name='close' size={16} />
const Delete = () => <MaterialIcons name='delete' size={16} />
const Edit = () => <MaterialIcons name='edit' size={16} />
const Submit = () => <MaterialIcons name='check' size={16} />

//compose
icons.Add = Add;
icons.Close = Close;
icons.Delete = Delete;
icons.Edit = Edit;
icons.Submit = Submit;

export default icons;

