import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function KraiChydeshu({navigation}) {
  
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
                  <Text style={styles.Accordes}>C                                                    F{'\n'}</Text>
                  Край чудесный нас ждет там на небе,{'\n'}
                  <Text style={styles.Accordes}>                          G              C{'\n'}</Text>
                  Где окончится труд и печаль!{'\n'}
                  <Text style={styles.Accordes}>C                                                     F{'\n'}</Text>
                  От скорбей я стремлюсь к той Отчизне,{'\n'}
                  <Text style={styles.Accordes}>F                              G             C {'\n'}</Text>
                  Где есть вечная радость и мир.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>F{'\n'}</Text>
                  Край чудесный!{'\n'}
                  <Text style={styles.Accordes}>             C{'\n'}</Text>
                  Край чудесный!{'\n'}
                  <Text style={styles.Accordes}>             G                              C{'\n'}</Text>
                  Сердце радостно рвется к тебе.{'\n'}
                  Край чудесный! {'\n'}
                  Край чудесный!{'\n'}
                  Там ведь ждет нас Спаситель к Себе.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Край чудесный, где Ангелов пенье{'\n'}
                  Раздается, как шум многих вод,{'\n'}
                  Славу Агнцу возносят святые,{'\n'}
                  "Аллилуйя!" - они все поют.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Край чудесный, где в свете небесном{'\n'}
                  Будем видеть мы славу Творца;{'\n'}
                  В тени пальм и в долинах чудесных{'\n'}
                  Там я буду счастлив без конца.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  В край чудесный мы скоро прибудем{'\n'}
                  И увидим Того, Кто нам мил;{'\n'}
                  Там утихнет скорбящее сердце:{'\n'}
                  Ведь там вечная радость и мир.{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
