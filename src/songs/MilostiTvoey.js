import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function MilostiTvoey({navigation}) {
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={styles.Song} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={styles.Accordes}>Еm              А         A7{'\n'}</Text>
                  Милости Твоей полна вся Земля, {'\n'}
                  <Text style={styles.Accordes}>D                    Hm{'\n'}</Text>
                  Милости Твоей полна жизнь моя, {'\n'}
                  <Text style={styles.Accordes}>Em                   F#{'\n'}</Text>               
                  Милость Свою Ты превознес над судом, {'\n'}
                  <Text style={styles.Accordes}>Hm           A              D{'\n'}</Text>
                  Возлюбил меня и ввел в Свой дом.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Em       A     D     Hm {'\n'}</Text>
                  Ты спас меня и оправдал,{'\n'}
                  <Text style={styles.Accordes}>Em               F#{'\n'}</Text>
                  Освободил от вины. (2 раза){'\n'}
                  <Text style={styles.Accordes}>Hm       Em    F#{'\n'}</Text>
                  Благодарю Тебя! (2 раза){'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
