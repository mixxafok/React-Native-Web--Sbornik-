import React, { useState} from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'


export default function DoveryatTebe( {namSong} ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
  const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0)
  const [start, setStart]= useState(0)
  const [ modalOpen , setModalOpen ] = useState (false);
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.concretSong}>{namSong}</Text>
          <TouchableWithoutFeedback style={{paddingBottom: '2px'}} onPress={() => { setModalOpen(!modalOpen)}}>
            <Image  source={Music} style={styles.music} />
          </TouchableWithoutFeedback>
          <Text style={viewAccordes ? styles.MenuAccordesView : styles.MenuAccordesHide} onPress={() =>   setViewAccordes(!viewAccordes)} >A</Text>
       </View>
 
       <View style={modalOpen ? styles.modViewChords : {display:"none"}}>
          <Text style={styles.ChordsEdit1} >
            <Text style={styles.chordsTon} onPress={()=>getTon(-1,{setStart})}>- </Text> {start} <Text onPress={()=>getTon(1,{setStart})}> +</Text>
          </Text>
        </View>
 
        <ScrollView>
                <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Ab{'\n'}</Text>
                  Отпускаю все мечты мои,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm{'\n'}</Text>
                  Я полагаю их у ног Твоих {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Bbm{'\n'}</Text>               
                  Если в жизни ошибаюсь я, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Db {'\n'}</Text>
                  Твоя любовь не изменяется {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Хотел сразиться я за жизнь мою...{'\n'}
                  Ослабли руки, устал я в бою{'\n'}
                  Ты сильный Воин, Ты Царь всех побед!{'\n'}
                  Я побеждаю, когда я в Тебе{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Ab                            Eb {'\n'}</Text>
                  И даже если горы не двигаясь стоят{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm                           Db{'\n'}</Text>
                  И если воды моря не разделяются...{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Ab                              Eb {'\n'}</Text>
                  И если на молитвы, не вижу я ответ{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm                         Db{'\n'}</Text>
                  Доверять, доверять буду я Тебе!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Что завтра мне принесёт опять?{'\n'}
                  Ты знаешь, всё известно для Тебя!{'\n'}
                  Живи во мне, будь дыханием моим{'\n'}
                  Дай каждый день ходить путём Твоим!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Мост: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Db                                  Eb{'\n'}</Text>
                  Ты мой покой и сила, опора Ты моя!{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm{'\n'}</Text>
                  Моё Ты основание, Ты крепкая скала!{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Db                                 Eb {'\n'}</Text>               
                  Твои пути прекрасны, они превыше всех!{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm                                Eb/G {'\n'}</Text>
                  Ты держишь эту Землю и всё в Твоей руке!{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
