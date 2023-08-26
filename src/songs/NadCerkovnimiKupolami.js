import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function NadCerkovnimiKupolami({navigation}) {
  
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
                  <Text style={styles.Accordes}>Am                    Dm{'\n'}</Text>
                  Над церковными куполами {'\n'}
                  <Text style={styles.Accordes}>E                        Am{'\n'}</Text>
                  Небо синее-синее.{'\n'}
                  <Text style={styles.Accordes}>C      {'\n'}</Text>               
                  Я иду, под моими ногами  {'\n'}
                  <Text style={styles.Accordes}>Dm                                E{'\n'}</Text>
                  Русь пролегла родимая.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Am                             Dm {'\n'}</Text>
                  Тихим светом далёким светится{'\n'}
                  <Text style={styles.Accordes}>G                                C{'\n'}</Text>
                  Небо, звёздами озарённое,{'\n'}
                  <Text style={styles.Accordes}>F                       Dm {'\n'}</Text>
                  И легко душе моей верится{'\n'}
                  <Text style={styles.Accordes}>F                  E         Am {'\n'}</Text>
                  В вечный рай, где живут спасённые.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  В чистом небе поют херувимы,{'\n'}
                  Сердце бьется от счастья и радости.{'\n'}
                  Для меня этот мир любимый:{'\n'}
                  Полон света, добра и благости.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  На земле моя жизнь окончится,{'\n'}
                  Пролетит незаметно, как птица.{'\n'}
                  И мне очень, очень хочется{'\n'}
                  За Россию всегда молиться!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
