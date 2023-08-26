import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function DoveryatTebe({navigation}) {
  
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
                  <Text style={styles.Accordes}>Ab{'\n'}</Text>
                  Отпускаю все мечты мои,{'\n'}
                  <Text style={styles.Accordes}>Fm{'\n'}</Text>
                  Я полагаю их у ног Твоих {'\n'}
                  <Text style={styles.Accordes}>Bbm{'\n'}</Text>               
                  Если в жизни ошибаюсь я, {'\n'}
                  <Text style={styles.Accordes}>Db {'\n'}</Text>
                  Твоя любовь не изменяется {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Хотел сразиться я за жизнь мою...{'\n'}
                  Ослабли руки, устал я в бою{'\n'}
                  Ты сильный Воин, Ты Царь всех побед!{'\n'}
                  Я побеждаю, когда я в Тебе{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Ab                            Eb {'\n'}</Text>
                  И даже если горы не двигаясь стоят{'\n'}
                  <Text style={styles.Accordes}>Fm                           Db{'\n'}</Text>
                  И если воды моря не разделяются...{'\n'}
                  <Text style={styles.Accordes}>Ab                              Eb {'\n'}</Text>
                  И если на молитвы, не вижу я ответ{'\n'}
                  <Text style={styles.Accordes}>Fm                         Db{'\n'}</Text>
                  Доверять, доверять буду я Тебе!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Что завтра мне принесёт опять?{'\n'}
                  Ты знаешь, всё известно для Тебя!{'\n'}
                  Живи во мне, будь дыханием моим{'\n'}
                  Дай каждый день ходить путём Твоим!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Мост: {'\n'}</Text>
                  <Text style={styles.Accordes}>Db                                  Eb{'\n'}</Text>
                  Ты мой покой и сила, опора Ты моя!{'\n'}
                  <Text style={styles.Accordes}>Fm{'\n'}</Text>
                  Моё Ты основание, Ты крепкая скала!{'\n'}
                  <Text style={styles.Accordes}>Db                                 Eb {'\n'}</Text>               
                  Твои пути прекрасны, они превыше всех!{'\n'}
                  <Text style={styles.Accordes}>Fm                                Eb/G {'\n'}</Text>
                  Ты держишь эту Землю и всё в Твоей руке!{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
