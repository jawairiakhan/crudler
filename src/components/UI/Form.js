import {KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import icons from './icons.js';
import { Button, ButtonTray } from './Button.js';

const Form = ({children, onSubmit, onCancel,submitLabel,submitIcon}) => {
  //Initialisations ---------------------
  // State -----------------------------
  // Handlers --------------------------
  // View ------------------------------
  
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
       
      <ScrollView contentContainerStyle={styles.formItems}>
         {children}
      </ScrollView>

      <ButtonTray>
        <Button icon={submitIcon} label={submitLabel} onClick={onSubmit} />
        <Button icon={<icons.Close />} label = "Cancel" onClick={onCancel} />
      </ButtonTray>
     
    </KeyboardAvoidingView>

  );
};

const InputText = ({label, value, onChange}) => {
    //Initialisations ---------------------
    // State -----------------------------
    // Handlers --------------------------
    // View ------------------------------
    
    return (
      <View style={styles.item}>
        <Text style={styles.itemLabel}>{label}</Text>
        <TextInput
          value={value} 
          onChangeText={onChange} 
          style={styles.itemTextInput} />
      </View>
    );
  };

  const InputSelect = ({label, prompt, options, value, onChange}) => {
    //Initialisations ---------------------
    // State -----------------------------
    // Handlers --------------------------
    // View ------------------------------
    
    return (
      <View style={styles.item}>
        <Text style={styles.itemLabel}>{label}</Text>
        <Picker
           mode="dropdown"
           selectedValue={value}
           onValueChange={onChange}
           style={styles.ItemPickerStyle}
        >
            <Picker.Item value={null} label={prompt} style={styles.ItemPickerPromptStyle} />
            {
              options.map((option, index) => <Picker.Item key= {index} value={option.value} label={option.label} />

              )
            }

        </Picker>
      </View>
    );
 };

 // Compose components
 Form.InputText = InputText;
 Form.InputSelect = InputSelect;
 
 // Style

const styles = StyleSheet.create({
    formContainer: {
        gap: 10,
    },
    formItems: {
        gap: 5,
    },
    itemLabel: {
        color: 'grey',
        fontSize: 16,
        marginBottom: 5,
     },
     itemTextInput: {
         height: 50,
         paddingLeft: 10,
         fontSize: 16,
         backgroundColor: 'white',
         borderRadius: 7,
         borderWidth: 1,
         borderColor: 'lightgray',
     },
     ItemPickerStyle: {
        height: 50,
        backgroundColor: 'whitesmoke',
     },
     ItemPickerPromptStyle: {
        color: 'gray',
     },
});

export default Form;