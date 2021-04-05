import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    textInput: {
        height: "100%",
    },
    container: {
        height: 30,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 40,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        backgroundColor:'#ebebeb',
        
    },
    textInputContainer: {
        flex: 1,
    },
    forget:{
        flexDirection:'row',
        marginLeft:30
    },
    signIn: {
        height: 30,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 40,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        backgroundColor:'green',
        
    },
    button:{
        fontSize:2
    }
})

export default styles;
