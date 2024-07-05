import { View,Image,Text,ScrollView,TouchableWithoutFeedback, KeyboardAvoidingView,Platform,Dimensions,TouchableOpacity} from 'react-native';
import { Colors, Images } from '@/constants';
import   stylesExplore from '@/styles/stylesExplore';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import'../../localization/i18n';
import { SelectList } from 'react-native-dropdown-select-list';
import DateRangePicker from "react-native-daterange-picker";
import moment from "moment";
import { Modal } from 'react-native-paper';
import { IconButton } from 'react-native-paper';


export default function Explore() {
    const { t } = useTranslation();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [displayedDate, setDisplayedDate] = useState(moment());
    const[open,setOpen]= useState(false);
    const [rooms, setRooms] = useState([{ "adult": 2, "children": 0 }]);
    const minDate = moment();

    const increaseAdult = (index) => {
      const updatedRooms = [...rooms];
      if(updatedRooms[index].adult < 4)
      updatedRooms[index].adult += 1;
      setRooms(updatedRooms);
    };
    const decreaseAdult = (index) => {
      const updatedRooms = [...rooms];
      if(updatedRooms[index].adult>0)
      updatedRooms[index].adult -= 1;
      setRooms(updatedRooms);
    };
    const increaseChildren = (index) => {
      const updatedRooms = [...rooms];
      if(updatedRooms[index].children < 4){
        updatedRooms[index].children += 1;
        updatedRooms[index][`child${updatedRooms[index].children}`] = 0;
      }
      setRooms(updatedRooms);
    };
    const decreaseChildren = (index) => {
      const updatedRooms = [...rooms];
      if(updatedRooms[index].children>0){
        updatedRooms[index].children -= 1;
        updatedRooms[index][`child${updatedRooms[index].children + 1}`] = undefined; 
      }
      setRooms(updatedRooms);
    };
    const increaseChildVariable = (index, childIndex) => {
      const updatedRooms = [...rooms];
      if(updatedRooms[index][`child${childIndex + 1}`]<18)
      updatedRooms[index][`child${childIndex + 1}`] += 1;
      setRooms(updatedRooms);
    };
    const decreaseChildVariable = (index, childIndex) => {
      const updatedRooms = [...rooms];
      if(updatedRooms[index][`child${childIndex + 1}`]>0)
      updatedRooms[index][`child${childIndex + 1}`] -= 1;
      setRooms(updatedRooms);
    };
    const addRoom = () => {
      const newRoom = { "adult": 2, "children": 0 };
      setRooms([...rooms, newRoom]);
    };
    const deleteRoom = (index) => {
      if (rooms.length > 1) {
        const updatedRooms = [...rooms];
        updatedRooms.splice(index, 1);
        setRooms(updatedRooms);
      }
    };


  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState({ label: 'USD', value: 'USD' });
  const items = [
    { label: 'Tunis', value: 'TunisTunisTunisTunisTunisTunis' },
    { label: 'Egypt', value: 'Egypt' },
    { label: 'Dubia', value: 'Dubia' },
    { label: 'Turkey', value: 'Turkey' },
    { label: 'Tunis', value: 'Tunis' },
    { label: 'Egypt', value: 'Egypt' },
    { label: 'Dubia', value: 'Dubia' },
    { label: 'Turkey', value: 'Turkey' },
  ];
  
  const itemsCurrency=[
    { key: 'USD', value: 'USD' },
    { key: 'GBP', value: 'GBP' },
    { key: 'CAD', value: 'CAD' },
    { key: 'AUD', value: 'JPY' }

  ];
  
  const previousMonth = () => {
    setDisplayedDate(moment(displayedDate).subtract(1, "months"))
  };

  const nextMonth = () => {
    setDisplayedDate(moment(displayedDate).add(1, "months"))
  };  

return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    
  >
    <View style={{width:'100%',height:'100%',position:'relative'}}>
      <Image source={Images.exploreImage} style={stylesExplore.containerImage}/>
      <View style={stylesExplore.containerFormulaire}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={stylesExplore.containerField}>
          <View style={{paddingTop:10}}>
            <Text style={stylesExplore.textStyle}>{t("screens.explore.text.destination")}</Text>
            <SelectList
              key="destination" 
              maxHeight={150}
              inputStyles={stylesExplore.textField}
              arrowicon={<Ionicons name='search' size={18} color={Colors.grey} style={{position:'absolute',left:10}}/>}
              closeicon={<Ionicons name='close-outline' size={20} color={Colors.grey} />}
              searchicon={<View/>} 
              boxStyles={{backgroundColor:Colors.vertdeauTran,borderRadius:20,borderColor:"#cce1de",alignItems:'center',width:(Dimensions.get('window').width-65)/2,height:45,position:'static'}}
              setSelected={setSelectedItem} 
              data={items} 
              placeholder={t("screens.explore.text.search")}
              searchPlaceholder={t("screens.explore.text.search")}
              notFoundText={t("screens.explore.text.notFoundText")}
              dropdownStyles={{borderColor:Colors.grey,width:(Dimensions.get('window').width-65)/2}}
              
            />
          </View>
          <View style={{paddingTop:10}}>
            <Text style={stylesExplore.textStyle}>{t("screens.explore.text.nationality")}</Text>
            <SelectList
              key="nationality" 
              dropdownStyles={{borderColor:Colors.grey,width:(Dimensions.get('window').width-65)/2}}
              maxHeight={150}
              inputStyles={stylesExplore.textField}
              arrowicon={<Ionicons name='search' size={18} color={Colors.grey} style={{position:'absolute',left:10}}/>}
              closeicon={<Ionicons name='close-outline' size={20} color={Colors.grey} />}
              searchicon={<View/>} 
              boxStyles={{backgroundColor:Colors.vertdeauTran,borderRadius:20,borderColor:"#cce1de",width:(Dimensions.get('window').width-65)/2,height:45,alignItems:'center'}}
              setSelected={setSelectedItem} 
              data={items} 
              placeholder={t("screens.explore.text.search")}
              searchPlaceholder={t("screens.explore.text.search")}
              notFoundText={t("screens.explore.text.notFoundText")}
            />
          </View>
        </View>
        <View style={stylesExplore.containerField}>
            <View>
                <Text style={stylesExplore.textStyle}>{t("screens.explore.text.in")}/{t("screens.explore.text.out")}</Text>
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <View style={stylesExplore.styleDate}>
                    <Ionicons name='calendar-outline' size={20} color={Colors.grey}/>
                        <Text style={{color:Colors.grey,fontSize:13}}>  {startDate && endDate ? 
                            `${moment(startDate).format("D MMM Y")} - ${moment(endDate).format("D MMM Y")}` : 
                            t("screens.explore.text.selectDate")}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View> 
            <View>
                <Text style={stylesExplore.textStyle}>{t("screens.explore.text.currency")}</Text>
                <SelectList
                    search={false}
                    key="currency" 
                    defaultOption={{ key: 'USD', value: 'USD' }}
                    maxHeight={150}
                    inputStyles={{ color:Colors.grey,fontSize:13}}
                    arrowicon={<Ionicons name='caret-down-outline' size={18} color={Colors.grey}/>} 
                    boxStyles={{backgroundColor:Colors.vertdeauTran,borderRadius:20,borderColor:"#cce1de",width:110,height:45}}
                    setSelected={setSelectedCurrency} 
                    data={itemsCurrency} 
                    placeholder={t("screens.explore.text.selectCurrency")}
                    searchPlaceholder={t("screens.explore.text.search")}
                    notFoundText={t("screens.explore.text.notFoundText")}
                    dropdownStyles={{borderColor:Colors.grey}}
                />
            </View>
        </View>
        {rooms.map((room, index) => (
            <View key={`room${index}`} style={stylesExplore.containerRoom}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
                <View>
                  <Text style={stylesExplore.textStyle}>Adult</Text>
                  <View style={stylesExplore.field}>
                    <IconButton icon="minus"  onPress={() => decreaseAdult(index)} iconColor={Colors.grey} size={16}/>
                    <Text style={stylesExplore.number}>{room.adult}</Text>
                    <IconButton  icon="plus" onPress={() => increaseAdult(index)} iconColor={Colors.grey} size={16}/>
                  </View>
                </View>
                <View>
                  <Text style={stylesExplore.textStyle}>{t("screens.explore.text.children")}</Text>
                  <View style={stylesExplore.field}>
                    <IconButton icon="minus"  onPress={() => decreaseChildren(index)} iconColor={Colors.grey} size={16}/>
                    <Text style={stylesExplore.number}>{room.children}</Text>
                    <IconButton  icon="plus" onPress={() => increaseChildren(index)} iconColor={Colors.grey} size={16}/>
                  </View>
                </View>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[...Array(room.children)].map((_, childIndex) => (
                  <View  key={`child${childIndex}`}>
                    <Text style={stylesExplore.textStyle}>{t("screens.explore.text.child")} {childIndex + 1 }</Text>
                    <View style={stylesExplore.containerChild}>
                      <IconButton icon="minus"  onPress={() => decreaseChildVariable(index, childIndex)} iconColor={Colors.grey} size={16}/>
                      <Text style={stylesExplore.number}>{room[`child${childIndex + 1}`]}</Text>
                      <IconButton  icon="plus" onPress={() => increaseChildVariable(index, childIndex)} iconColor={Colors.grey} size={16}/>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          ))}
          <View style={{paddingTop:5,paddingBottom:20,flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=>addRoom()}>
              <Text style={stylesExplore.textRoom}> {t("screens.explore.text.addRoom")}</Text>
            </TouchableOpacity>
            {rooms.length > 1 &&(
              <TouchableOpacity onPress={()=>deleteRoom()}>
                <Text style={stylesExplore.textRoom}> {t("screens.explore.text.removeRoom")}</Text>
              </TouchableOpacity> 
            )}
          </View>
          <View style={{alignItems:'center'}}>
            <View style={stylesExplore.botton}>
              <TouchableOpacity onPress={()=>{}}>
                <Text style={stylesExplore.textBotton}> {t("screens.explore.text.find")}</Text>
              </TouchableOpacity> 
            </View>
          </View>
        
      </ScrollView>
      </View>
      
    </View>
    {open && (
        <Modal visible={open} animationType="fade">
            <TouchableWithoutFeedback onPress={()=>setOpen(false)}>
                <View style={{height:'100%', width:"100%"}} />
            </TouchableWithoutFeedback>
            <DateRangePicker
                selectedStyle={{backgroundColor:Colors.vert}}
                open={open}
                onChange={(dates) => {
                 if (dates.startDate != null) { setStartDate(dates.startDate); }
                    if (dates.endDate != null) { setEndDate(dates.endDate); }
                }}
                startDate={startDate}
                endDate={endDate}
                minDate={minDate}
                monthPrevButton={<TouchableOpacity onPress={()=>{previousMonth()}}><Ionicons name='chevron-back-outline' size={20} color={Colors.grey} /></TouchableOpacity>}
                monthNextButton={<TouchableOpacity onPress={()=>{nextMonth()}}><Ionicons name='chevron-forward-outline' size={20} color={Colors.grey} /></TouchableOpacity>}
                range
                backdropStyle={{height:50,backgroundColor:Colors.transparent}}
                children={<Text></Text>}
                displayedDate={displayedDate}
            />
        </Modal>
    )}
  </KeyboardAvoidingView>
  );
}





