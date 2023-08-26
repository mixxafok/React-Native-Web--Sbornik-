import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function UnostSvetlya({navigation}) {
  
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
                  <Text style={styles.Accordes}>Hm      D{'\n'}</Text>
                 Юность светлая, весна ранняя –{'\n'}
                  <Text style={styles.Accordes}>Em      A      D{'\n'}</Text>
                  Мы ее Творцу принесем,{'\n'}
                  <Text style={styles.Accordes}>G      Em{'\n'}</Text>
                  Молодые мы в золотые дни{'\n'}
                  <Text style={styles.Accordes}>Hm      F#      Hm{'\n'}</Text>
                  Лишь для Господа живем.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Тьма неверия окружает нас,{'\n'}
                  Туча черная впереди,{'\n'}
                  Мы Христа огни в эти злые дни{'\n'}
                  Расставляем на пути.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Хоть и труден путь и тернистый он,{'\n'}
                  Со Христом его мы пройдем.{'\n'}
                  Молодые мы в золотые дни{'\n'}
                  Лишь для Господа живем.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  О не бойся, друг, не смущайся, брат,{'\n'}
                  Проходя свой жизненный путь!{'\n'}
                  Впереди тебя твой Христос прошел{'\n'}
                  И тебя идти зовет.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 5: {'\n'}</Text>
                  Так спеши же, друг, посвятить Христу{'\n'}
                  Утро юности, жизни дни,{'\n'}
                  И Он даст тебе золотой венец,{'\n'}
                  Будешь царствовать ты с Ним.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
