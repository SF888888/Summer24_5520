import React, {useState} from 'react';
import { View, Button, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageManager = ({imageUriHandler}) => {
    const [status, requestPermission] = ImagePicker.useCameraPermissions();
    const [imageUri, setImageUri] = useState('');

    async function verifyPermission(){
        const response = await ImagePicker.getCameraPermissionsAsync();
        console.log(response);
        if(response.granted){
            return true;
        }
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
    }

    async function takeImageHandler(){
        try{
        const hasPermission = await verifyPermission();
        if(!hasPermission){
            Alert.alert('Permission required', 'You need to grant camera permission to use this app', [{text: 'Okay'}]);
            return;
        }
        const result = await ImagePicker.launchCameraAsync({allowsEditing:true});
        if (!result.canceled) {
            const uri = result.assets[0].uri; 
            setImageUri(result.assets[0].uri);
            imageUriHandler(result.assets[0].uri);
            console.log(uri);
        }
        console.log(result)
    }catch(err){
        console.log(err);
    
    }
    }
    return (
        <View >
             <Button title="Open Camera" onPress={takeImageHandler} />
           {imageUri && <Image source={{uri: imageUri}} style={{width:200,height:200}} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ImageManager;
