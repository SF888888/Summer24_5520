import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageManager = () => {
    const openCamera = async () => {
        const options = {
            allowsEditing: true,
        };

        let result = await ImagePicker.launchCameraAsync(options);

        if (!result.canceled) {
            console.log(result.assets);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Open Camera" onPress={openCamera} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ImageManager;
