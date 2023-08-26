import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function DerjitOnMenya({navigation}) {
  
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
                  <Text style={styles.Accordes}>G       C       D       G{'\n'}</Text>
                  Если грех меня страшит, Держит Он меня!{'\n'}
                  <Text style={styles.Accordes}>G       C       D       G{'\n'}</Text>
                  Вера в Бога победит: Держит Он меня. {'\n'}
                  <Text style={styles.Accordes}>C       D       G       C       H       Em {'\n'}</Text>               
                  Чтобы мне не потерять вечного огня, {'\n'}
                  <Text style={styles.Accordes}>C       D       G         C        D       G {'\n'}</Text>
                  Должен Он меня держать. Держит Он меня. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>C       D       Em{'\n'}</Text>
                  Держит Он меня,{'\n'}
                  <Text style={styles.Accordes}>Em       D       G{'\n'}</Text>
                  Держит Он меня.{'\n'}
                  <Text style={styles.Accordes}>G       Am       G       C{'\n'}</Text>
                  Охраняя и любя,{'\n'}
                  <Text style={styles.Accordes}>C       D       G{'\n'}</Text>
                  Держит Он меня.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  В крепких, любящих руках держит Он меня, {'\n'}
                  Дорог я в Его глазах: держит Он меня. {'\n'}
                  Он не даст погибнуть мне, сохранит вполне.{'\n'}
                  Обещания храня, держит Он меня. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  За меня страдал Христос, держит Он меня.{'\n'}
                  Наказание понес, держит Он меня. {'\n'}
                  Я воскресну к жизни с Ним — держит Он меня.{'\n'}
                  Знаю, буду им храним до благого дня.{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
