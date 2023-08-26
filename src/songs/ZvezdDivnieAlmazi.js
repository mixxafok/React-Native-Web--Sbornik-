import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function ZvezdDivnieAlmazi({navigation}) {
  
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
                  <Text style={styles.Accordes}>  Hm  {'\n'}</Text>
                  Что этот свет? Он - созданье Всевышнего, {'\n'}
                  <Text style={styles.Accordes}>  G      {'\n'}</Text>
                  Воля и Разум Творца. {'\n'}
                  <Text style={styles.Accordes}>  D                        A {'\n'}</Text>               
                  Это ль не есть выражение Божьей любви?  {'\n'}
                  <Text style={styles.Accordes}>   H {'\n'}</Text>
                  Горы, равнины и дали лесистые, {'\n'}
                  <Text style={styles.Accordes}>  G{'\n'}</Text>
                  Скалы, овраги и травы душистые, {'\n'}
                  <Text style={styles.Accordes}>  Em     {'\n'}</Text>               
                  Утра румянец и ночи мерцание - {'\n'}
                  <Text style={styles.Accordes}>  A                 F#   {'\n'}</Text>
                  Бога создание, Бога дыхание. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>  Hm        G        D           F#   {'\n'}</Text>
                  Звёзд дивные алмазы на чёрный бархат неба {'\n'}
                  <Text style={styles.Accordes}>  Hm        G        D           F#{'\n'}</Text>
                  Ты поместил Своей рукой, поместил Своей рукой.{'\n'}
                  <Text style={styles.Accordes}>  Hm        G        D           F#{'\n'}</Text>
                  Нет, я ещё ни разу столь к Тебе близок не был.{'\n'}
                  <Text style={styles.Accordes}>  Hm        G        D           F#          Hm{'\n'}</Text>
                  Ты подарил душе покой, подарил душе покой.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Что этот мрак, силы тёмной сгущение, {'\n'}
                  Вечно скрывает свой лик?           {'\n'}                                                           
                  Слава, Отец, что не ею дано нам спастись!    {'\n'}                                     
                  Солнце взойдёт , тучи черные скроются, {'\n'}
                  Земли водой дождевою омоются, {'\n'}
                  Птицы небесные песню Тебе поют, {'\n'}
                  Имя Твое облекая в гармонию! {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Что эта жизнь - Божий дар и служение,  {'\n'}
                  Радость и мука души.              {'\n'}                                                           
                  Где ты найдёшь совокупность столь разных в одном?   {'\n'}    
                  Пусть из страданий и счастье строится, {'\n'}
                  Лишь после смерти награда откроется.       {'\n'}                             
                  Чаша скорбей производит терпение, {'\n'}
                  Вся наша жизнь на земле - лишь мгновение!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
