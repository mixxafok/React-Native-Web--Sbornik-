import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function KtoJeYa({navigation}) {
  
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
                  <Text style={styles.Accordes}>H           H/A#           G#m {'\n'}</Text>
                  Кто же я, что Царя Вселенной всей {'\n'}
                  <Text style={styles.Accordes}>F#          E     F#          E     F#{'\n'}</Text>
                  Волнует боль моя и мир в душе моей? {'\n'}
                  <Text style={styles.Accordes}>H           H/A#           G#m {'\n'}</Text>
                  Кто же я, что чудесный Божий свет {'\n'}
                  <Text style={styles.Accordes}>F#          E     F#          E     F#{'\n'}</Text>
                  Ведет меня всегда, когда мира в сердце нет? {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Мост: {'\n'}</Text>
                  <Text style={styles.Accordes}>E           F#          G#m            F#/A# {'\n'}</Text>
                  Не за то, что сделал я, но по милости Твоей. {'\n'}
                  <Text style={styles.Accordes}>G#m            F#/A#          E           F# {'\n'}</Text>
                  Не за все мои дела Ты любовь даруешь мне. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>H           H/A#           G#m {'\n'}</Text>
                  Я - лишь цветок, что расцветает {'\n'}
                  <Text style={styles.Accordes}>F#          E {'\n'}</Text>
                  И мгновенно увядает. {'\n'}
                  <Text style={styles.Accordes}>F#          E           F# {'\n'}</Text>
                  Пришел в мир и исчезну, как утренний туман. {'\n'}
                  <Text style={styles.Accordes}>H           H/A#           G#m {'\n'}</Text>
                  Но Ты мольбам моим внимаешь. {'\n'}
                  <Text style={styles.Accordes}>F#          E {'\n'}</Text>
                  Если упаду, прощаешь.  {'\n'}
                  <Text style={styles.Accordes}>F#          E           H     E    G#m    F#{'\n'}</Text>
                  Ты сказал мне, что я  Твой, навсегда, навсегда. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Кто же я, что Всевидящий Господь,  {'\n'}
                  Простив мои грехи, дарует мне любовь? {'\n'}
                  Кто же я, чтобы Бог, смиривший шторм, {'\n'}
                  Дарил мне Свой покой, когда вокруг лишь зло?{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
