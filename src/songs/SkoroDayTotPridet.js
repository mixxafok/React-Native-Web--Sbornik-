import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function SkoroDayTotPridet({navigation}) {
  
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
                  <Text style={styles.Accordes}>G          Н{'\n'}</Text>
                  Скоро день тот придет, и не будет всех забот,{'\n'}
                  <Text style={styles.Accordes}>Am         D         G         G7{'\n'}</Text>
                  Ни печали невзгод, ни нужды, ни тревог. {'\n'}
                  <Text style={styles.Accordes}>C         Cm         G         Em{'\n'}</Text>
                  Мир царит в стране святой, тьмы не будет никакой. {'\n'}
                  <Text style={styles.Accordes}>Am         D         G         G7{'\n'}</Text>
                  Что за день, радостный день будет там!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>С         Сm         G         E{'\n'}</Text>
                  Что за день будет там, когда встречу я Христа! {'\n'}
                  <Text style={styles.Accordes}>A         D         G         G7{'\n'}</Text>
                  Он возьмет меня с Собой в край небесный, не земной. {'\n'}
                  <Text style={styles.Accordes}>C         Cm         G         Em{'\n'}</Text>
                  Руку даст Он мне Свою, и я с Ним туда пойду. {'\n'}
                  <Text style={styles.Accordes}>Am         D         G{'\n'}</Text>
                  Что за день, радостный день будет там! {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Там не будет забот, Мир и радость не пройдет. {'\n'}
                  Ни болезнь, ни слеза, Радость будет без конца. {'\n'}
                  Буду вечно я тогда Прославлять Царя Христа. {'\n'}
                  Что за день, радостный день Будет там!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Скоро день тот придет, и не будет всех забот, {'\n'}
                  Ни печали невзгод, Ни нужды, ни тревог. {'\n'}
                  Мир царит в стране святой, Тьмы не будет никакой. {'\n'}
                  Что за день, радостный день Будет там!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
