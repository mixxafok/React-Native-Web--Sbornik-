import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function PustYgasloNebo({navigation}) {
  
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
                  <Text style={styles.Accordes}>Am     F     Am     F{'\n'}</Text>
                  Пусть угасло небо, пусть померк рассвет,{'\n'}
                  <Text style={styles.Accordes}>Am     F     Am     F{'\n'}</Text>
                  Пусть умолкли люди, пусть молчат в ответ{'\n'}
                  <Text style={styles.Accordes}>Dm     G{'\n'}</Text>
                  На любовь Твою.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Am     F     Am   F     C{'\n'}</Text>
                  Но шелестом дождя, песнею ручья{'\n'}
                  <Text style={styles.Accordes}>G     Am{'\n'}</Text>
                  Для Тебя, Господь,{'\n'}
                  <Text style={styles.Accordes}>F     Am   F     C{'\n'}</Text>
                  Из сердца в небеса льется песнь моя,{'\n'}
                  <Text style={styles.Accordes}>G     Am{'\n'}</Text>
                  Песня без конца.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Да, кругом раздоры, Да и Ты забыт,{'\n'}
                  Люди прочь уходят в путь, что тьмой покрыт,{'\n'}
                  Где Ты забыт.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Ты придёшь и навсегда yмолкнет грех. {'\n'}
                  Там, где темнота была,Сияет свет,{'\n'}
                  Bечный свет{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
