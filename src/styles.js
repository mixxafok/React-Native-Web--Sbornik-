import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   containerLight: {
      flex: 2,
      backgroundColor: '#eeeeee',
    },
   containerDark: {
    flex: 1/2,
    backgroundColor: '#121212',
  },
   header: {
     width: '100%',
     height: 60,
     backgroundColor: '#098f30',
   },
   Pesni: {
     fontSize: 18,
     marginTop: '25px',
     marginLeft: '3%',
   },
   Arrow: {
      width: 30,
      height: 30,
      marginTop: 20,
     marginLeft: '3%',
    },
   Menu1: {
     width: 25,
     height: 25,
     marginTop: -25,
     marginLeft:'86%',
   },
   NameSongsDark: {
    color:'#eeeeee',
    background: '#121212',
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    height: 50,
    borderStyle:'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: 'lightgray',
    borderRightColor:'#blue',
    paddingLeft: '3%',
    fontSize: 18,
    fontWeight: 'bold',
  },
   NameSongs: {
      color:'#121212',
      background: '#eee',
      flex: 1,
      paddingTop: 10,
      alignItems: 'center',
      height: 50,
      borderStyle:'solid',
      borderWidth: 1,
      borderColor: 'lightgray',
      paddingLeft: '3%',
      fontSize: 18,
      fontWeight: 'bold',
    },

    SongLight:{
      flex: 1,
      color:'#121212',
      backgroundColor:'#eeeeee',
      paddingRight: "6%",
      paddingLeft: '2%',
      fontSize: 18,
      fontWeight: 'bold'
    },
    SongDark:{
      flex: 1,
      color:'#eeeeee',
      backgroundColor:'#121212',
      paddingRight: "6%",
      paddingLeft: '2%',
      fontSize: 18,
      fontWeight: 'bold'
    },
    Couplet: {
      fontSize: 16,
      color: 'grey',
      fontWeight: 'bold',
    },
    AccordesLight: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    AccordesDark: {
      color: '#00dd00',
      fontSize: 18,
      fontWeight: 'normal',
    },
    MenuAccordesView:{
      margin: 0,
      marginTop: -30,
      marginLeft:'86%',
      // textDecorationLine:'underline',
      borderBottomWidth: 2,
      borderBottomColor: '#eee',
      fontWeight: 900,
      textAlign: 'center',
      width: 15,
      color: '#121212',
      fontSize: 20
    },
    MenuAccordesHide:{
      margin: 0,
      marginTop: -30,
      marginLeft:'86%',
      // textDecorationLine:'underline',
      borderBottomWidth: 2,
      borderBottomColor: '#121212',
      fontWeight: 900,
      textAlign: 'center',
      width: 15,
      color: '#121212',
      fontSize: 20
    },
    modView: {
      flex: 1/5,
      backgroundColor:'#eeeeee',
      marginTop: 40,
      alignSelf: 'flex-end',
      width: "70%",
      borderRadius: 5,
      
    },
    modText: {
      color:'#121212',
      fontSize: 18,
      width: "65%",
      top: 10,
      left: "2%",
    },
    modSwitch:{
    position: 'absolute',
    top: "8%",
    right: 15
    },

    Slider:{
      top: 30,
      width: '96%',
      marginLeft: '2%' 
    },
    SliderText: {
      position: 'absolute',
      top: 53,
      left: "2%",
      color:'#121212',
      fontSize: 18,
    },
 })
 