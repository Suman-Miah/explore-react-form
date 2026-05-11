import './App.css';
import SimpleForm from './components/simpleForm/SimpleForm';
import FormAction from './components/FormAction/FormAction';
import ControlledField from './components/ControlledField/ControlledField';
import UnControlledField from './components/UncontrolledField/UnControlledField';
import useInputField from './Hooks/useInputField';
import HookForm from './HookForm/HookForm';
import ProductManagement from './ProductManegament/ProductManagement';
import FamilyTree from './FamilyTree/FamilyTree';


function App() {

  return (
    <>
          <h1>Explore React Form</h1> 
          {/* <SimpleForm></SimpleForm> */}
          {/* <FormAction></FormAction> */}
          {/* <ControlledField></ControlledField> */}
          {/* <UnControlledField></UnControlledField> */}
          {/* <HookForm></HookForm> */}
          {/* <ProductManagement></ProductManagement> */}
          <FamilyTree></FamilyTree>
    </>
  );
}

export default App
