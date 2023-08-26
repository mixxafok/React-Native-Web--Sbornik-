import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function HristianinNesiOgon({navigation}) {
  
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
                  <Text style={styles.Accordes}>Am                                                 Dm{'\n'}</Text>
                  Христианин, неси огонь чудесный свой,{'\n'}
                  <Text style={styles.Accordes}>                 E7                          Am{'\n'}</Text>
                  Который дал тебе Христос.{'\n'}
                  <Text style={styles.Accordes}>                                                        Dm {'\n'}</Text>               
                  Он умер на кресте, пожертвовав Собой.{'\n'}
                  <Text style={styles.Accordes}>           E7                                 Am{'\n'}</Text>
                  Огонь любви Он всем принес.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>            E7                      Am{'\n'}</Text>
                  Гори огонь, всегда гори!{'\n'}
                  <Text style={styles.Accordes}>                                                        Dm{'\n'}</Text>
                  Воспламеняй собой холодные сердца{'\n'}
                  <Text style={styles.Accordes}>                G                                 C{'\n'}</Text>
                  И новый мир прекрасный озари,{'\n'}
                  <Text style={styles.Accordes}>   Am                      E               Am{'\n'}</Text>
                  В котором радость без конца.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Вот - путник, он устал, он изнемог в пути,{'\n'}
                  Согрей его и ободри,{'\n'}
                  Скажи, что не покинет его вечный Бог,{'\n'}
                  Засветит солнце впереди.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  А если путник вдруг свернет с того пути,{'\n'}
                  Который к радости ведет.{'\n'}
                  То ты в его груди огонь любви зажги,{'\n'}
                  Чтобы он смог тот путь найти.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  И если станет очень тяжело тебе,{'\n'}
                  Суровый мир сдует огонь,{'\n'}
                  Не унывай, ведь любящий Господь с тобой,{'\n'}
                  Он сохранить светильник твой.{'\n'}
              </Text>
        </ScrollView> 

           

     </View>
   );
     
 }
