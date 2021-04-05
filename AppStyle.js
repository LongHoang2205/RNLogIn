import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal:100,
        marginVertical:100,
        flex:1,
        borderWidth:1,
    }, 
    title:{
       backgroundColor:'green',
       alignItems:'center',
       justifyContent:"center",
       height:50,
       
    },
    text:{
        fontWeight:"bold",
        fontSize:16,
        color:'#fff'
    },
    input:{
        marginVertical:30
    },
    color:{
        color:'red'
    },
    validate:{
        width:'100%',
        flexDirection:"row",
        marginLeft:30
    },
    denied:{
        marginTop:50,
        alignItems:"center",
    },
    signUp:{
        alignItems:"center"
    },
    ok:{
        color:'green',
        
    },
  
   


   
});

export default styles