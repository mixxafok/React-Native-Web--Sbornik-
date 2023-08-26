import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function TiKydaIdesh({navigation}) {
  
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
                  <Text style={styles.Accordes}> С{'\n'}</Text>
                  "Ты куда идешь, скажи мне,{'\n'}
                  <Text style={styles.Accordes}>F         G{'\n'}</Text>
                  Странник с посохом в руке?" -{'\n'}
                  <Text style={styles.Accordes}>F         G{'\n'}</Text>
                  "Дивной милостью Господней{'\n'}
                  <Text style={styles.Accordes}>C         G         C{'\n'}</Text>
                  К лучшей я иду стране.{'\n'}
                  
                  <Text style={styles.Accordes}>F         G{'\n'}</Text>
                  // Через горы и долины,{'\n'}
                  <Text style={styles.Accordes}>C         A{'\n'}</Text>
                  Через степи и поля,{'\n'}
                  <Text style={styles.Accordes}>F         G{'\n'}</Text>
                  Чрез леса и чрез равнины{'\n'}
                  <Text style={styles.Accordes}>C         G         C{'\n'}</Text>
                  Я иду домой, друзья". // 2р.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  "Странник, в чем твоя надежда{'\n'}
                  В той стране твоей родной?" -{'\n'}
                  "Белоснежная одежда{'\n'}
                  И венец весь золотой.{'\n'}
                  // Там источники живые{'\n'}
                  И небесные цветы,{'\n'}
                  Я иду за Иисусом{'\n'}
                  Через жгучие пески". // 2р.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  "Страх и ужас не знакомы{'\n'}
                  Разве на пути тебе?" - {'\n'}
                  "Да, но Божьи легионы{'\n'}
                  Охранят меня везде! {'\n'}
                   // Иисус Христос со мною,{'\n'}
                  Он направит Сам меня {'\n'}
                  Неуклонною тропою{'\n'}
                  Прямо, прямо в небеса". // 2р.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  "Так возьми ж меня с собою,{'\n'}
                  Где чудесная страна". -{'\n'}
                  "Да, мой друг, пойдем со мною,{'\n'}
                  Вот тебе моя рука!{'\n'}
                  // Недалеко уж родная{'\n'}
                  И желанная страна.{'\n'}
                  Вера чистая, живая{'\n'}
                  Нас введет с тобой туда. // 2р.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
