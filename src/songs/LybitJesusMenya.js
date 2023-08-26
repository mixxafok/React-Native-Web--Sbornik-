import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function LybitJesusMenya({navigation}) {
  
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
                  <Text style={styles.Accordes}>D               Em{'\n'}</Text>
                  Любит Иисус меня, любит меня,{'\n'}
                  <Text style={styles.Accordes}>A               D{'\n'}</Text>
                  Песня об этом пусть будет моя.{'\n'}
                  <Text style={styles.Accordes}>D                  Em{'\n'}</Text>               
                  И не скрываю я, пусть знают все: {'\n'}
                  <Text style={styles.Accordes}>A           D       D7{'\n'}</Text>
                  Любит Иисус меня, Его люблю я!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Em              A{'\n'}</Text>
                  Он любит меня, Его люблю я,{'\n'}
                  <Text style={styles.Accordes}>D              Hm{'\n'}</Text>
                  Чудесная дружба с Ним у меня.{'\n'}
                  <Text style={styles.Accordes}>Em                A{'\n'}</Text>
                  Всегда и везде мне с Ним хорошо,{'\n'}
                  <Text style={styles.Accordes}>D        A        D{'\n'}</Text>
                  Он близок в беде, Он рядом со мной.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Мир предлагает мне дружбу свою, {'\n'}
                  Но говорю я: нет! И песню пою. {'\n'}
                  Сила моя лишь в Нем, в Боге святом,{'\n'}
                  Давайте же вместе петь дружно о том.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Друг, подойди к Христу, сердце открой, {'\n'}
                  Руку подай свою в руку Его, {'\n'}
                  Вечную радость в Нем ты обретешь {'\n'}
                  И песню новую тогда запоешь. {'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
